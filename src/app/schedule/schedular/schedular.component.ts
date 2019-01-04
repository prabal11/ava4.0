import { Component, OnInit, ElementRef, Inject, ViewChild, EventEmitter, Output, Input, HostListener } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { MessageService } from '../../core/message.service';

import { MatCalendar } from '@angular/material';

/*import domtoimage from 'dom-to-image';*/

@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.scss']
})

export class SchedularComponent implements OnInit {
	
	public config: PerfectScrollbarConfigInterface = {wheelSpeed:0};
	@ViewChild('scrollercomponent') scrollercomponent: PerfectScrollbarComponent;
	
	@ViewChild('schedularcont') schedularcont: ElementRef;
	
	dd_deck_label: string;
	dd_chair_label: string;
	
	chair_labelArr: any = [];
	
	alignLeft: string;
	alignRight: string;
	
	search_options: any[] = [{'name': 'Becca Kurfin', 'id': 1}, {'name': 'Estelle Goslin', 'id': 2}, {'name': 'Becky Smith', 'id': 3}, {'name': 'Belamy Wilson', 'id': 4}, {'name': 'Berry Holmes', 'id': 5}, {'name': 'Bethany Roland', 'id': 6}];
	
	selectedDate: any;
	userseldate: any;
	
	timeline_scroll_y = 0;
	windowHt: any;
	window_innerHt: any;
	
	showScrollUp: boolean = false;
	showScrollDn: boolean = true;
	
	isToday: boolean = true;
	dateLabel: any = {'date-selector-label': true, 'other-day': !this.isToday};
	
	scroll_up: boolean = false;
	scroll_dn: boolean = true;
	
	showlastList: boolean = false;
	
	lastlistArr: any[] = [{name: 'Obi- Wan Kenobi', dob: '06/19/1996'}, {name: 'Sheeve Palpatine', dob: '06/19/1996'}, {name: 'Jar Jar Binks', dob: '06/19/1996'}, {name: 'Darth Maul', dob: '06/19/1996'}, {name: 'Qui - Gonn Jinn', dob: '06/19/1996'}, {name: 'Padme Amidala', dob: '06/19/1996'}, {name: 'Sio Bibble', dob: '06/19/1996'}, {name: 'Poe Dameron', dob: '06/19/1996'}, {name: 'Aayla Secura', dob: '06/19/1996'}, {name: 'Jessika Pava', dob: '06/19/1996'}];
	
	views: any[] = [{label: "4 hour", value: 4}, {label: "2 hour", value: 2}, {label: "Entire day", value: 9}];
	selectedviewIndx: any = 0;
	
	zoomviewport: any = 100;
	zoomWd: any;
	topbarZoomWd: any;
	
	subscription: Subscription;
	openNewTab = 2;
	
	
	@HostListener('window:resize', ['$event']) onResize(event) {
		this.windowHt = (window.innerHeight - 350);
		this.window_innerHt = window.innerHeight - 4;
	}
	
	/*@HostListener('window:keydown', ['$event']) keyEvent(event: KeyboardEvent) {
		
		if(event.ctrlKey==true && event.which == 90){
			console.log("ctrl + z pressed");
			
			var node = document.getElementById('schedularcont');

			domtoimage.toPng(node).then(function (dataUrl) {
				console.log(dataUrl);
			}).catch(function (error) {
				console.error('oops, something went wrong!', error);
			});
			
			
		}
	}*/
	
  constructor(public overlaydialog: MatDialog, private messageService: MessageService) { 
	
	this.dd_deck_label = 'On Deck';
	this.dd_chair_label = 'In Chair';
	this.chair_labelArr = [{label: '1', patient: 'Sheev Palpatine', dr: 'Dr. Roberts', seated: '07:32', progress: '100', bookingtime: '1 hr', bookingtimeMin: null, excesstime: '+16m'}, {label: '2', patient: null, dr: null, seated: null, progress: null, bookingtime: null, excesstime: 0}, {label: '3', patient: 'Qui-Gonn Jinn', dr: 'Dr. Tobler', seated: '07:45', progress: '100', bookingtime: null, bookingtimeMin: '45m', excesstime: 0}, {label: '4', patient: 'Aayla Secura', dr: 'Dr. Doria', seated: '8:03', progress: '50', bookingtime: '1 hr', bookingtimeMin: null, excesstime: 0}, {label: '5', patient: "Padme Amidala", dr: null, seated: '8:28', 'progress': 80, bookingtime: null, bookingtimeMin: '45m', excesstime: 0}, {label: '6', patient: null, dr: null, seated: null, 'progress': null, bookingtime: null, excesstime: 0, bookingtimeMin: null}, {label: '7', patient: 'Sheev Palpatine', dr: 'Dr. Roberts', seated: '07:32', progress: '100', bookingtime: '1 hr', bookingtimeMin: null, excesstime: '+16m'}, {label: '8', patient: null, dr: null, seated: null, progress: null, bookingtime: null, excesstime: 0}, {label: '9', patient: 'Qui-Gonn Jinn', dr: 'Dr. Tobler', seated: '07:45', progress: '100', bookingtime: null, bookingtimeMin: '45m', excesstime: 0}];
	
	this.alignLeft = 'left';
	this.alignRight = 'right';
	
	this.selectedDate = new Date();
	
	this.subscription = this.messageService.getMessage().subscribe(message => {
		if(message.event == 'newtabopen'){
			let _newtabOpen = message.data;
			this.openNewTab =  _newtabOpen;
			
			let innerWd: any = window.innerWidth - (this.openNewTab*46);
			
			/*if(window.innerWidth < 1758){
				innerWd = 1758 - (this.openNewTab*48);
			} else {
				innerWd = window.innerWidth - (this.openNewTab*48);
			}*/
			
			this.zoomWd = (innerWd - 395)*((100 + (100 - this.zoomviewport))/100);
			this.topbarZoomWd = (innerWd)*((100 + (100 - this.zoomviewport))/100);
			
			//this.zoomWd = (1758 - 383 - (this.openNewTab*46))*((100 + (100 - this.zoomviewport))/100);
			
			
		}
	});
  }

  ngOnInit() {
		
		if(window.localStorage.getItem('zoomview') != null || window.localStorage.getItem('zoomview') != undefined) {
			this.zoomviewport = Number(window.localStorage.getItem('zoomview'));
		}
				
		this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 350);
		
		let innerWd: any = window.innerWidth - (this.openNewTab*48);
		
		/*if(window.innerWidth < 1758){
			innerWd = 1758 - (this.openNewTab*48);
		} else {
			innerWd = window.innerWidth - (this.openNewTab*48);
		}*/
		
		this.zoomWd = (innerWd - 395)*((100 + (100 - this.zoomviewport))/100);
		this.topbarZoomWd = (innerWd)*((100 + (100 - this.zoomviewport))/100);
		
		//this.zoomWd = (1758 - 383 - (this.openNewTab*46))*((100 + (100 - this.zoomviewport))/100);
		
		
		this.window_innerHt = window.innerHeight - 4;
		
		setTimeout(() => {
			
			let chckScrollPos: any = this.scrollercomponent.directiveRef.position();
			
			if(chckScrollPos.y == 'end'){
				this.scroll_dn = false;
			} else {
				this.scroll_dn = true;
			}
			
		}, 500);
  }
  
	onShowCalender(evt: MouseEvent): void {
		const target = new ElementRef(evt.currentTarget);
		let dialog_config: any = {data: { trigger: target, dt: this.selectedDate }, backdropClass: 'cdk-overlay-transparent-backdrop', panelClass: 'calenderClass'};

		const dialogRef = this.overlaydialog.open(CalenderBox, dialog_config);
		
		const sub = dialogRef.componentInstance.selectedDate.subscribe((data: any) => {
		 this.selectedDate = data;
		 
		 let today = new Date();
		today.setHours(0,0,0,0);
		
		let _selectedDate = this.selectedDate;
		_selectedDate.setHours(0,0,0,0);
		
		if(_selectedDate.getTime() === today.getTime()){
			this.isToday = true;
		} else {
			this.isToday = false;
		}
		
		this.messageService.sendMessage('isToday', this.isToday);
		
		this.dateLabel['other-day'] = !this.isToday;
		 
		});
		
		dialogRef.afterClosed().subscribe(_res => {
			
		});
	}
	
	nextPrevDate(dir){
		
		let seldt = new Date(this.selectedDate);
		
		if(dir == 'nextday'){
			seldt.setDate(seldt.getDate() + 1);
		} else if(dir == 'prevday') {
			seldt.setDate(seldt.getDate() - 1);
		} else if(dir == 'prevweek') {
			seldt.setDate(seldt.getDate() - 7);
		} else if(dir == 'nextweek') {
			seldt.setDate(seldt.getDate() + 7);
		}
		
		this.selectedDate = seldt;
		
		let today = new Date();
		today.setHours(0,0,0,0);
		
		let _selectedDate = this.selectedDate;
		_selectedDate.setHours(0,0,0,0);
		
		if(_selectedDate.getTime() === today.getTime()){
			this.isToday = true;
		} else {
			this.isToday = false;
		}
		
		this.messageService.sendMessage('isToday', this.isToday);
		
		this.dateLabel['other-day'] = !this.isToday;
	}
	
	scroll(dir) {
		
		let checkScrollability: any = this.scrollercomponent.directiveRef.position();
		
		if(dir == 'up'){
			if(checkScrollability.y != 'start'){
				this.timeline_scroll_y -= 100;
				this.showScrollDn = true;
			} else {
				this.showScrollUp = false;
			}
		} else {
			if(checkScrollability.y != 'end'){
				this.timeline_scroll_y += 120;
				this.showScrollUp = true;
			} else {
				this.showScrollDn = false;
			}
		}
		
		setTimeout(() => {
			
			let chckScrollPos: any = this.scrollercomponent.directiveRef.position();
						
			if(chckScrollPos.y == 'start'){
				this.scroll_up = false;
			} else {
				this.scroll_up = true;
			}
			
			if(chckScrollPos.y == 'end'){
				this.scroll_dn = false;
			} else {
				this.scroll_dn = true;
			}
			
		}, 500);
		
		this.messageService.sendMessage('scroll', this.timeline_scroll_y);
		this.scrollercomponent.directiveRef.scrollTo(0, this.timeline_scroll_y, 500);
	}
	
	resetCalender(){
		this.selectedDate = new Date();
		this.isToday = true;
		this.messageService.sendMessage('isToday', this.isToday);
		this.dateLabel['other-day'] = !this.isToday;
	}
	
	showLast() {
		this.showlastList = this.showlastList === true ? false : true;
	}
	
	getView(view){
		this.messageService.sendMessage('timelineview', view);
	}
	
	zoomView(dir) {
		if(dir == 'in'){
			this.zoomviewport -= 5;
		} else {
			this.zoomviewport += 5;
		}
		if(this.zoomviewport < 25){
			this.zoomviewport = 25;
		}
		
		if(this.zoomviewport > 200){
			this.zoomviewport = 200;
		}
		
		this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 350);
		
		let innerWd: any = window.innerWidth - (this.openNewTab*46);
		if(window.innerWidth < 1758){
			innerWd = 1758 - (this.openNewTab*46);
		} else {
			innerWd = window.innerWidth - (this.openNewTab*46);
		}
		this.zoomWd = (innerWd - 420)*((100 + (100 - this.zoomviewport))/100);
		this.topbarZoomWd = (innerWd-4)*((100 + (100 - this.zoomviewport))/100);
		
		//this.zoomWd = (innerWd - 383 - (this.openNewTab*46))*(this.zoomviewport/100);
		
		this.messageService.sendMessage('zoomview', this.zoomviewport);
		
		setTimeout(() => {
			
			let chckScrollPos: any = this.scrollercomponent.directiveRef.position();
			
			console.log(chckScrollPos);
						
			if(chckScrollPos.y == 'start'){
				this.scroll_up = false;
			} else {
				this.scroll_up = true;
			}
			
			if(chckScrollPos.y == 'end'){
				this.scroll_dn = false;
				this.scroll_up = false;
			} else {
				this.scroll_dn = true;
			}
			
		}, 500);
		
		window.localStorage.setItem('zoomview', this.zoomviewport);
	}
	
	onSelection(evt){
		this.messageService.sendMessage('openpatienttab', evt.option.value);
	}

}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class CalenderBox implements OnInit {
  private readonly _matDialogRef: MatDialogRef<CalenderBox>;
  private readonly triggerElementRef: ElementRef;
  
   @Output() selectedDate = new EventEmitter();
   
   userseldate: any;
   zoomviewport: any = 1;
  
  constructor(_matDialogRef: MatDialogRef<CalenderBox>,
              @Inject(MAT_DIALOG_DATA) data: { trigger: ElementRef, dt: any}) {
    this._matDialogRef = _matDialogRef;
    this.triggerElementRef = data.trigger;
	this.userseldate = data.dt;
	
  }

  ngOnInit() {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
    
    matDialogConfig.width = '775px';
    matDialogConfig.height = '400px';
	
	if(window.localStorage.getItem('zoomview') != null || window.localStorage.getItem('zoomview') != undefined) {
		this.zoomviewport = Number(window.localStorage.getItem('zoomview'))/100;
	}
		
	/*matDialogConfig.position = { left: `${((rect.left*this.zoomviewport) - (76*this.zoomviewport + 42))}px`, top: `${(rect.bottom*this.zoomviewport + 20)}px`};*/
	
	matDialogConfig.position = { left: `${(rect.left) - (67*this.zoomviewport + 42)}px`, top: `${(rect.bottom + 9*this.zoomviewport)}px`};
	
    this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this._matDialogRef.updatePosition(matDialogConfig.position);
	
  }
  
  getSelectedDate($event){
	this.selectedDate.emit($event);
  }
  
  cancel(): void {
    this._matDialogRef.close(null);
  }
  
  
}
