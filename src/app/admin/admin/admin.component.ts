import { Component, OnInit, HostListener } from '@angular/core';

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
						{title: 'Analytics', checked: true}, 
						{title: 'Settings', checked: false}, 
						{title: 'Practice Management', checked: false}
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

  constructor(private messageService: MessageService) { }

  ngOnInit() {
	
	this.accordHt = window.innerHeight-4;
		
		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;
		
		this.acord_bottom_margin = window.innerHeight - (this.zoomWd*this.panelArr.length);
		this.acord_cont_ht = this.acord_bottom_margin;
	
  }
  
  activePanel(indx){
	
	this.panelArr.map(item => {
		item.checked = false;
	});
	
	this.panelArr[indx].checked = true;
	this.itemclicked = true;
	
  }
  
  openPanelOption(evnt){
	this.activePanel(evnt.panel);
	this.messageService.sendMessage('openOption', {panel: evnt.panel, indx: evnt.indx});
  }

}
