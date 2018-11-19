import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatmentmeter',
  templateUrl: './treatmentmeter.component.html',
  styleUrls: ['./treatmentmeter.component.css']
})
export class TreatmentmeterComponent implements OnInit {
	
	treatmentMonth = 9;
	elapsedMonth = 7.8;
	markerArr: any[] = [];
	markerHt: any = 467;
	timeElaspsed: any = 0;
	timeElaspsed_percentage: any = 72;
	
	leftMeter_timeElapsed:any = 0;
	leftMater_time_percentage: any = 33;
	
	redmarker: any = 0;
	redmarker_percentage = 60;
	redmarker_days = 52;
	
	todayCount: any = 0;
	todayCountDays: any = 65;
	
	movePos: any = 0;
	movecount: any = 0;
	
  constructor() { }

  ngOnInit() {
	
		let markerSpace = ((this.markerHt-4)/10);
		
		this.leftMeter_timeElapsed = (this.markerHt/10)*(this.leftMater_time_percentage/10) + 1;
		this.redmarker = (this.markerHt/10)*(this.redmarker_percentage/10) + 1;
		
		this.timeElaspsed = (this.markerHt/10)*(this.timeElaspsed_percentage/10) + 1;
		this.todayCount = (this.markerHt/10)*(this.todayCountDays/10) + 1;
				
		for(let i=0; i<11; i++){
			this.markerArr[i] = markerSpace*i;
		}
		
	
  }
  
  nextSlide() {
	this.movecount++;
	if(this.movecount > 2){
		this.movecount = 0;
	}
	
	this.movePos = -(this.movecount*167);
  }

}
