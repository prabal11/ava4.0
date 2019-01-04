import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-outreachmain',
  templateUrl: './outreachmain.component.html',
  styleUrls: ['./outreachmain.component.css']
})
export class OutreachmainComponent implements OnInit {
	
	accordHt: any = window.innerHeight-70-4;
	acord_bottom_margin: any; 
	acord_cont_ht: any;
	itemclicked = true;
	
	zoomWd = 46;
	borderWd = 1;
	fontsize = 15;
	
	panelArr: any[] = [
						{title: 'Treatment', checked: true},
						{title: 'Finances', checked: false}, 
						{title: 'Communication', checked: false},
					  ];
	
	chair_labelArr: any[] = [{label: '1', patient: 'Sheev Palpatine', dr: 'Dr. Roberts', seated: '07:32', progress: '100', bookingtime: '1 hr', bookingtimeMin: null, excesstime: '+16m'}, {label: '5', patient: "Padme Amidala", dr: null, seated: '8:28', 'progress': 80, bookingtime: null, bookingtimeMin: '45m', excesstime: 0}, {label: '3', patient: 'Qui-Gonn Jinn', dr: 'Dr. Tobler', seated: '07:45', progress: '100', bookingtime: null, bookingtimeMin: '45m', excesstime: 0}, {label: '4', patient: 'Aayla Secura', dr: 'Dr. Doria', seated: '8:03', progress: '50', bookingtime: '1 hr', bookingtimeMin: null, excesstime: 0}];
	
	patientInChair: any = {label: '9', patient: 'Stella Goslin', dr: 'Dr. Roberts', seated: '08:28', progress: '40', bookingtime: null, bookingtimeMin: '10m', excesstime: null};
					  
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.itemclicked = false;
		this.accordHt = window.innerHeight-70-4;
		
		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;
		
		this.acord_bottom_margin = window.innerHeight - 70 - 4 - (this.zoomWd*this.panelArr.length);
		this.acord_cont_ht = this.acord_bottom_margin;
	}
	
	constructor() { }
	
	ngOnInit() {
	
		this.accordHt = window.innerHeight-70-4;
		
		let borderWd = 1/window.devicePixelRatio;
		this.zoomWd = 46/window.devicePixelRatio + 2*borderWd;
		this.fontsize = 15/window.devicePixelRatio;
		
		console.log('zoomwd: ', this.zoomWd, window.devicePixelRatio);
		
		this.acord_bottom_margin = window.innerHeight - 70 - 4 - (this.zoomWd*this.panelArr.length);		
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
