import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

	@Input() public chairDetails;
	
	radius = 24;
	circumference = 2 * Math.PI * this.radius;
	dashoffset: number;
	
	progressValue = {'progress__value': true, 'progress_complete': false};
	
	clickCount:any = 1;
	clickTimer: any;
	preventSingleClick: boolean; 
	
  constructor(private messageService: MessageService) { 
  
  }

  ngOnInit() {
	
	if(this.chairDetails.progress == 100){
		this.progressValue = {'progress__value': false, 'progress_complete': true};
	}
	this.progress(this.chairDetails.progress);
  }
  
  progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }
  
  changeCount(){
	this.clickTimer = 0;
	this.preventSingleClick = false;
	
	let delay = 250;
	
	this.clickTimer = setTimeout(() => {
		if(!this.preventSingleClick){
			console.log('single click');
			
			this.clickCount++;
			if(this.clickCount > 2){
				this.clickCount = 1;
			}
		}
	}, delay);
  }
  
  dblclickEvent(){
	this.preventSingleClick = true;
	clearTimeout(this.clickTimer);
	this.clickCount = 3;
	console.log("double click");
  }
  
  addtoBucket() {
	
	this.messageService.sendMessage('addtobucket', this.chairDetails);
	
	this.chairDetails.patient = null;
	this.chairDetails.dr = null;
	this.chairDetails.seated = null;
	this.chairDetails.progress = null;
	this.chairDetails.bookingtime = null;
	this.chairDetails.bookingtimeMin = null;
	this.chairDetails.excesstime = null;
  }

}
