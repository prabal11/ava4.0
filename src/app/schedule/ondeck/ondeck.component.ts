import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-ondeck',
  templateUrl: './ondeck.component.html',
  styleUrls: ['./ondeck.component.css']
})
export class OndeckComponent implements OnInit {
	
	public config: PerfectScrollbarConfigInterface = {wheelSpeed:0, suppressScrollX: false, suppressScrollY: true};
	@ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
	
	scrol_x = 0;
	
	showSeat: any[] = [false, false, false, false];
	
  constructor() { }

  ngOnInit() {
  }
  
	moveHorizontally(dir){
		if(dir == 'right'){
			this.scrol_x += 100;
		} else {
			this.scrol_x = 0;
		}
		
		this.componentRef.directiveRef.scrollTo(this.scrol_x, 0, 500);
	}

}
