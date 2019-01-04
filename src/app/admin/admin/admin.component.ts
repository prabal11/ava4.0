import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
	accordHt: any = window.innerHeight-4;
	acord_bottom_margin: any; 
	acord_cont_ht: any;
	itemclicked = true;
	
	zoomWd = 46;
	borderWd = 1;
	fontsize = 15;
	
	panelArr: any[] = [
						{title: 'Analytics', checked: true, id: 0}, 
						{title: 'Practice Management', checked: false, id: 1},
						{title: 'Settings', checked: false, id: 2}
					  ];
					  
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.itemclicked = false;
		this.accordHt = window.innerHeight-4;
		
		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;
		
		this.acord_bottom_margin = window.innerHeight - (this.zoomWd*this.panelArr.length);
		this.acord_cont_ht = this.acord_bottom_margin;
	}

  constructor(private router: Router, private messageService: MessageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
	
	this.accordHt = window.innerHeight-4;
		
		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;
		
		this.acord_bottom_margin = window.innerHeight - (this.zoomWd*this.panelArr.length);
		this.acord_cont_ht = this.acord_bottom_margin;
		
		this.activePanel(0);
	
  }
  
  activePanel(indx){
	
	this.itemclicked = true;
	
	this.panelArr.map(item => {
		item.checked = false;
	});
	
	this.panelArr[indx].checked = true;
	
	setTimeout(() => {
		if(this.panelArr[indx].id == 0){
			this.router.navigate([{outlets: { analytics: ['analytics']}}], {relativeTo: this.activatedRoute})
			.then(() => {this.router.navigate([{outlets: {settings: null, pmt: null}}], {relativeTo: this.activatedRoute})});
		} else if(this.panelArr[indx].id == 1){
			this.router.navigate([{outlets: { pmt: ['pmt']}}], {relativeTo: this.activatedRoute})
			.then(() => {this.router.navigate([{outlets: {analytics: null, settings: null}}], {relativeTo: this.activatedRoute})});
		} else if(this.panelArr[indx].id == 2){
			this.router.navigate([{outlets: { settings: ['settings']}}], {relativeTo: this.activatedRoute})
			.then(() => {this.router.navigate([{outlets: {analytics: null, pmt: null}}], {relativeTo: this.activatedRoute})});
		}
	
	}, 1000);
  }
  
  openPanelOption(evnt){
	this.activePanel(evnt.panel);
	this.messageService.sendMessage('openOption', {panel: evnt.panel, indx: evnt.indx});
  }

}
