import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-outreachmain',
  templateUrl: './outreachmain.component.html',
  styleUrls: ['./outreachmain.component.css']
})
export class OutreachmainComponent implements OnInit {
	
	accordHt: any = window.innerHeight-4;
	acord_bottom_margin: any; 
	acord_cont_ht: any;
	itemclicked = true;
	
	zoomWd = 46;
	borderWd = 1;
	fontsize = 15;
	
	panelArr: any[] = [
						{title: 'Treatment', checked: true}, 
						{title: 'Finances', checked: false}, 
						{title: 'Ava Outreach', checked: false}
					  ];
					  
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.itemclicked = false;
		this.accordHt = window.innerHeight-4;
		
		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;
		
		this.acord_bottom_margin = window.innerHeight - (46*this.panelArr.length);
		this.acord_cont_ht = this.acord_bottom_margin;
	}
	
	constructor() { }
	
	ngOnInit() {
	
		this.accordHt = window.innerHeight-4;
		
		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;
		
		this.acord_bottom_margin = window.innerHeight - (46*this.panelArr.length);
		this.acord_cont_ht = this.acord_bottom_margin;
	
	}
	
	activePanel(indx){
	
		this.panelArr.map(item => {
			item.checked = false;
		});
		
		this.panelArr[indx].checked = true;
		this.itemclicked = true;
	
	}

}
