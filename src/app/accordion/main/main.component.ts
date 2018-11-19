import { Component, OnInit, HostListener} from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { fadeAnimation } from '../../animations/fade.animation';

import { Subscription } from 'rxjs';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeAnimation]
})
export class MainComponent implements OnInit {
	
	@HostListener('window:keydown', ['$event'])
	keyEvent(event: KeyboardEvent) {
		var keyCodes = [61, 107, 173, 109, 187, 189];
		 if (event.ctrlKey==true && (keyCodes.indexOf(event.which) != -1)) {
			 return false;
		}
	}
	
	
	loadingRouteConfig: boolean;
	
	accordHt: any = window.innerHeight-4;
	accord_content_Ht: any = this.accordHt;
	
	acord_margin: any; 
	acord_cont_wd: any;
	
	itemclicked = true;
	
	zoomWd = 46;
	borderWd = 1;
	fontsize = 15;
	
	panelArr: any[] = [
		{id: 0, title: 'Admin', checked: true}, 
		{id: 1, title: 'Schedule', checked: false}, 
		{id: 2, title: 'Avas Outreach', checked: false},
		/*{title: 'Treatment Card', checked: false},*/
	];
	
	tabIndx: any = this.panelArr.length-1;
	
	subscription: Subscription;
	
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		
		this.itemclicked = false;
		this.accordHt = window.innerHeight-4;
		this.accord_content_Ht = this.accordHt;

		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;

		this.acord_margin = window.innerWidth - (this.zoomWd*this.panelArr.length);
		this.acord_cont_wd = this.acord_margin;
		
	}

	
	
  constructor(private router: Router, private messageService: MessageService) {
	
	this.subscription = this.messageService.getMessage().subscribe(message => {
		if(message.event == 'openpatienttab'){
		
			this.tabIndx++;
			if(this.tabIndx < 4 && this.panelArr.length < 4){
				this.panelArr.push({id: this.tabIndx, title: message.data, checked: false});
			} else {
				if(this.tabIndx > 3){
					this.tabIndx = 2;
				}
				this.panelArr[this.tabIndx].title = message.data;
			}
			
			this.acord_margin = window.innerWidth - (this.zoomWd*this.panelArr.length);
			this.acord_cont_wd = this.acord_margin;
			
			setTimeout(() => {
				this.activePanel(this.tabIndx);
			}, 800)
			
		}
		
	});
	
  }

  ngOnInit() {
	this.accordHt = window.innerHeight-4;
	this.accord_content_Ht = this.accordHt;

	let borderWd = 1/window.devicePixelRatio;
	this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
	this.fontsize = 15/window.devicePixelRatio;

	this.acord_margin = window.innerWidth - (this.zoomWd*this.panelArr.length);
	this.acord_cont_wd = this.acord_margin;
	
	this.router.events.subscribe(event => {
    if(event instanceof NavigationStart) {
      this.loadingRouteConfig = true;
      console.log("event started")
    }else if(event instanceof NavigationEnd) {
      this.loadingRouteConfig = false;
      console.log("event end")
    }
  });
	
  }
  
	getRouterOutletState(outlet) {
		return outlet.isActivated ? outlet.activatedRoute : '';
	}
  
  activePanel(indx){
	
	this.itemclicked = true;
	
	this.panelArr.map(item => {
		item.checked = false;
	});
	
	this.panelArr[indx].checked = true;
	
	setTimeout(() => {
		if(this.panelArr[indx].id == 0){
			this.router.navigate(['/ava', { outlets: { adminoutlet: ['admin']}}])
				.then(() => {this.router.navigate(['/ava', { outlets: {scheduleoutlet: null, outreachoutlet: null, outreachoutletx: null}}])});
			
		} else if(this.panelArr[indx].id == 1){
			this.router.navigate(['/ava', { outlets: {scheduleoutlet: ['schedule']}}])
				.then(() => {this.router.navigate(['/ava', { outlets: {adminoutlet: null, outreachoutlet: null, outreachoutletx: null}}])})
				
		} else if(this.panelArr[indx].id == 3) {
			this.router.navigate(['/ava', { outlets: {outreachoutlet: ['outreach']}}])
				.then(() => {this.router.navigate(['/ava', { outlets: {adminoutlet: null, scheduleoutlet: null, outreachoutletx: null}}])})
				
		} else if(this.panelArr[indx].id == 2) {
			this.router.navigate(['/ava', { outlets: {outreachoutletx: ['outreach']}}])
				.then(() => {this.router.navigate(['/ava', { outlets: {adminoutlet: null, scheduleoutlet: null, outreachoutlet: null}}])})
		}
	
	}, 1000);
  }

}
