import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { Subscription } from 'rxjs';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

	patientArr: any[];
	guidePosArr: any[] = [];
	windowHt: any;
	
	clockWd: any = 0;
	clockInterval:any;
	checkTimeInterval:any;
	
	public config: PerfectScrollbarConfigInterface = {wheelSpeed:0, suppressScrollX: false};
	public timerConfig: PerfectScrollbarConfigInterface = {wheelSpeed:0, suppressScrollX: false};
	
	@ViewChild('patientcomponent') patientcomponent: PerfectScrollbarComponent;
	@ViewChild('timercomponent') timercomponent: PerfectScrollbarComponent;
	@ViewChild('timer') timer: ElementRef;
	
	subscription: Subscription;
	timeline_scroll_y = 0;
	timerScroll = 0;
	
	startTime = "07:00";
	endTime = "18:30";
	endTime_minutes: any;
	
	timerLabelArr: any[] = [];
	slotcont_wd = 114;
	scrollablecont_wd = 114;
	
	timer_width: any;
	timer_view: any = 4;
	
	slot_space:any;
	block_space: any;
	
	views: any[] = [{label: "4 hour", value: 4}, {label: "2 hour", value: 2}, {label: "Entire day", value: 9}];
	selectedviewIndx: any = 0;
	
	_isToday: any = true;
	
	zoomviewport: any = 100;
	
	
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		if(window.localStorage.getItem('zoomview') != null || window.localStorage.getItem('zoomview') != undefined) {
			this.zoomviewport = Number(window.localStorage.getItem('zoomview'));
		}
			
		this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 305);
	}
	
  constructor(private messageService: MessageService) { 
	
	this.patientArr = [{chair: 'Chair 1', 
						patients: [{firstname:'Sheev', lastname: 'Palpatine', stratTime: '07:30', endTime: '08:30', accesscode: '000401', payment: false, alergy: true, profileimg: 'assets/492730210.png', appntType: 'appl'},
						{firstname:'Kylo', lastname: 'Ren', stratTime: '08:30', endTime: '09:15', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/images.png', appntType: 'dband'},
					   {firstname:'Mace', lastname: 'Windu', stratTime: '09:15', endTime: '09:30', accesscode: '000607', payment: false, alergy: true, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Leia', lastname: 'Organa', stratTime: '09:30', endTime: '09:45', accesscode: '000302', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'exam'}, {firstname:'Mace', lastname: 'Windu', stratTime: '09:45', endTime: '10:30', accesscode: '000302', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'exam'},
					   {firstname:'Luke', lastname: 'Skywalker', stratTime: '10:30', endTime: '11:00', accesscode: '000302', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'appl'},
					   {firstname:'Jabba', lastname: 'The Hutt', stratTime: '11:00', endTime: '11:30', accesscode: '000607', payment: false, alergy: true, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   ]
					  },
					  {chair: 'Chair 2', 
						patients: [{firstname:'June', lastname: 'Binks', stratTime: '08:00', endTime: '8:15', accesscode: '000302', payment: true, alergy: true, profileimg: 'assets/images-1.png', appntType: 'dband'},
						{firstname:'Han', lastname: 'Solo', stratTime: '08:15', endTime: '08:25', accesscode: '000607', payment: false, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'exam'},
						{firstname:'Max', lastname: '', stratTime: '08:30', endTime: '08:45', accesscode: '000607', payment: false, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'exam'},
						
						{firstname:'Pamela', lastname:'', stratTime: '09:00', endTime: '09:10', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'},
						{firstname:'Trevor', lastname:'', stratTime: '09:10', endTime: '09:20', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/495827904.png', appntType: 'adj'},
						{firstname:'Lennor', lastname:'', stratTime: '09:20', endTime: '09:30', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'adj'},
						
					   {firstname:'Bail', lastname: 'Organa', stratTime: '09:30', endTime: '10:30', accesscode: '000302', payment: true, alergy: true, profileimg: 'assets/images-1.png', appntType: 'dband'},
					   {firstname:'Anakin', lastname: 'Skywalker', stratTime: '10:30', endTime: '10:40', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/495827904.png', appntType: 'record'},
					   {firstname:'General', lastname: 'Hux', stratTime: '11:00', endTime: '12:00', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'start'}
					   ]
					  },
					  {chair: 'Chair 3', 
						patients: [{firstname:'Chewbacca', lastname:'', stratTime: '07:00', endTime: '08:00', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/495827904.png', appntType: 'adj'},
					   {firstname:'Aayla', lastname: 'Secura', stratTime: '08:00', endTime: '8:30', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Rey', lastname: '', stratTime: '08:30', endTime: '09:00', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/images.png', appntType: 'exam'},
					   {firstname:'Padme', lastname: 'Amidala', stratTime: '09:00', endTime: '09:15', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'},
					   
					   {firstname:'Chewbacca', lastname:'', stratTime: '09:15', endTime: '09:30', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/495827904.png', appntType: 'adj'},
					   {firstname:'Aayla', lastname: 'Secura', stratTime: '09:30', endTime: '10:15', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Rey', lastname: '', stratTime: '10:15', endTime: '10:25', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/images.png', appntType: 'exam'},
					   {firstname:'Padme', lastname: 'Amidala', stratTime: '10:25', endTime: '10:35', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'},
					   
					   {firstname:'Chewbacca', lastname:'', stratTime: '10:35', endTime: '11:00', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/495827904.png', appntType: 'adj'},
					   {firstname:'Aayla', lastname: 'Secura', stratTime: '11:00', endTime: '11:45', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Rey', lastname: '', stratTime: '11:45', endTime: '11:55', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/images.png', appntType: 'exam'},
					   
					   ]
					  },
					  {chair: 'Chair 4',
						patients: [{firstname:'Qui-Gon', lastname: 'Jinn', stratTime: '07:00', endTime: '07:15', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/492730210.png', appntType: 'appl'},
					   {firstname:'Obi-Wan', lastname: 'Kenobi', stratTime: '08:00', endTime: '9:00', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images.png', appntType: 'exam'},
					   {firstname:'Jabba', lastname: 'Hutt', stratTime: '09:00', endTime: '09:30', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'start'},
					   {firstname:'Poe', lastname: 'Dameron', stratTime: '09:30', endTime: '10:00', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images.png', appntType: 'adj'}
					   ]
					  },
					  {chair: 'Chair 5',
						patients: [{firstname:'General', lastname: 'Hux', stratTime: '07:50', endTime: '08:00', accesscode: '000204', payment: false, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'dband'},
					   {firstname:'Poe', lastname: 'Dameron', stratTime: '08:00', endTime: '08:45', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'},
					   {firstname:'Finn', lastname: '',  stratTime: '08:45', endTime: '09:00', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'exam'}
					   ]
					  },
					  {chair: 'Chair 6',
						patients: [{firstname:'Kylo', lastname: 'Ren', stratTime: '08:00', endTime: '08:30', accesscode: '000204', payment: false, alergy: true, profileimg: 'assets/492730210.png', appntType: 'adj'},
					   {firstname:'Jango', lastname: 'Fett', stratTime: '08:30', endTime: '8:40', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'exam'},
					   {firstname:'BB-8', lastname: '', stratTime: '08:50', endTime: '09:00', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'}
					   ]
					  },
					  
					  {chair: 'Chair 7',
						patients: [{firstname:'General', lastname: 'Hux', stratTime: '07:50', endTime: '08:00', accesscode: '000204', payment: false, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'dband'},
					   {firstname:'Poe', lastname: 'Dameron', stratTime: '08:00', endTime: '08:45', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'},
					   {firstname:'Finn', lastname: '',  stratTime: '08:45', endTime: '09:00', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/profile_4.png', appntType: 'exam'}
					   ]
					  },
					  
					  {chair: 'Chair 8', 
						patients: [{firstname:'Chewbacca', lastname:'', stratTime: '07:00', endTime: '08:00', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/495827904.png', appntType: 'adj'},
					   {firstname:'Aayla', lastname: 'Secura', stratTime: '08:00', endTime: '8:30', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Rey', lastname: '', stratTime: '08:30', endTime: '09:00', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/images.png', appntType: 'exam'},
					   {firstname:'Padme', lastname: 'Amidala', stratTime: '09:00', endTime: '09:15', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'},
					   
					   {firstname:'Chewbacca', lastname:'', stratTime: '09:15', endTime: '09:30', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/495827904.png', appntType: 'adj'},
					   {firstname:'Aayla', lastname: 'Secura', stratTime: '09:30', endTime: '10:15', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Rey', lastname: '', stratTime: '10:15', endTime: '10:25', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/images.png', appntType: 'exam'},
					   {firstname:'Padme', lastname: 'Amidala', stratTime: '10:25', endTime: '10:35', accesscode: '000401', payment: false, alergy: false, profileimg: 'assets/images-1.png', appntType: 'adj'},
					   
					   {firstname:'Chewbacca', lastname:'', stratTime: '10:35', endTime: '11:00', accesscode: '000204', payment: true, alergy: false, profileimg: 'assets/495827904.png', appntType: 'adj'},
					   {firstname:'Aayla', lastname: 'Secura', stratTime: '11:00', endTime: '11:45', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Rey', lastname: '', stratTime: '11:45', endTime: '11:55', accesscode: '000607', payment: true, alergy: false, profileimg: 'assets/images.png', appntType: 'exam'},
					   
					   ]
					  },
					  
					  {chair: 'Chair 9', 
						patients: [{firstname:'Sheev', lastname: 'Palpatine', stratTime: '07:30', endTime: '08:30', accesscode: '000401', payment: false, alergy: true, profileimg: 'assets/492730210.png', appntType: 'appl'},
						{firstname:'Kylo', lastname: 'Ren', stratTime: '08:30', endTime: '09:15', accesscode: '000302', payment: false, alergy: false, profileimg: 'assets/images.png', appntType: 'dband'},
					   {firstname:'Mace', lastname: 'Windu', stratTime: '09:15', endTime: '09:30', accesscode: '000607', payment: false, alergy: true, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   {firstname:'Leia', lastname: 'Organa', stratTime: '09:30', endTime: '09:45', accesscode: '000302', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'exam'}, {firstname:'Mace', lastname: 'Windu', stratTime: '09:45', endTime: '10:30', accesscode: '000302', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'exam'},
					   {firstname:'Luke', lastname: 'Skywalker', stratTime: '10:30', endTime: '11:00', accesscode: '000302', payment: true, alergy: false, profileimg: 'assets/images-1.png', appntType: 'appl'},
					   {firstname:'Jabba', lastname: 'The Hutt', stratTime: '11:00', endTime: '11:30', accesscode: '000607', payment: false, alergy: true, profileimg: 'assets/492730210.png', appntType: 'exam'},
					   ]
					  }
	
	
	]
	
	this.subscription = this.messageService.getMessage().subscribe(message => {
		if(message.event == 'scroll'){
			this.timeline_scroll_y = message.data;
			this.patientcomponent.directiveRef.scrollTo(this.timerScroll, this.timeline_scroll_y, 500);
		}
		
		if(message.event == 'isToday'){
			this._isToday = message.data;
			this.changeView();
		}
		
		if(message.event == 'timelineview'){
			this.getView(message.data);
		}
		
		if(message.event == 'zoomview'){
			this.zoomviewport = message.data;
			this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 305);
			
			this.changeView();
		}
		
	});
	
  }

  ngOnInit() {
	/*this.windowHt = window.innerHeight - 330;*/
	
	if(window.localStorage.getItem('zoomview') != null || window.localStorage.getItem('zoomview') != undefined) {
		this.zoomviewport = Number(window.localStorage.getItem('zoomview'));
	}
		
	this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 305);
	
	this.timer_width = this.timer.nativeElement.offsetWidth;
	this.timer_view = this.views[this.selectedviewIndx].value;
		
	/*this.createTimeGuide();
	this.clock();*/
	
	setTimeout(() => {
		this.changeView();
	}, 500)
	
	
	
  }
  
  clock() {
		
	this.clockWd = this.block_space;
	
	let today = new Date();
	let start_time_hr:any = Number(this.startTime.split(':')[0]);
	let start_time_min: any = Number(this.startTime.split(':')[1]);
	
	let currentHr = Math.abs(start_time_hr - today.getHours());
	let currentMin = today.getMinutes();
	let currentSec = today.getSeconds();
		
	let workingTime_sec = `01/01/2018 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
	let start_time_sec = `01/01/2018 ${start_time_hr}:${start_time_min}:${today.getSeconds()}`;
	
	let endTime_hr:any;
	let endTime_min:any;
	let endTime_sec = 0;
	let nowTime_sec;
	let end_time_sec;
	
	if(Date.parse(workingTime_sec) >= Date.parse(start_time_sec)){
		endTime_hr = Number(this.endTime.split(':')[0]);
		endTime_min = Number(this.endTime.split(':')[1]);
		
		nowTime_sec = `01/01/2018 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
		end_time_sec = `01/01/2018 ${endTime_hr}:${endTime_min}:${today.getSeconds()}`;
		
		if(Date.parse(nowTime_sec) < Date.parse(end_time_sec)){
			this.clockWd = (currentHr*60 + currentMin + currentSec/60)*(this.slot_space/60) + this.block_space;
		} else {
			this.clockWd = (Math.abs(start_time_hr - endTime_hr)*60 + endTime_min + currentSec/60)*(this.slot_space/60) + this.block_space;
		}
	}
	
	
	this.checkTimeInterval = setInterval(() => {
		
		console.log("checkTimeInterval");
		
		let today = new Date();
		let start_time_hr:any = Number(this.startTime.split(':')[0]);
		let start_time_min: any = Number(this.startTime.split(':')[1]);
		
		let currentHr = Math.abs(start_time_hr - today.getHours());
		let currentMin = today.getMinutes();
		let currentSec = today.getSeconds();
			
		let workingTime_sec = `01/01/2018 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
		let start_time_sec = `01/01/2018 ${start_time_hr}:${start_time_min}:${today.getSeconds()}`;
		
		let endTime_hr:any;
		let endTime_min:any;
		let endTime_sec = 0;
		let nowTime_sec;
		let end_time_sec;
		
		if(Date.parse(workingTime_sec) >= Date.parse(start_time_sec)){
			clearInterval(this.checkTimeInterval);
			
			endTime_hr = Number(this.endTime.split(':')[0]);
			endTime_min = Number(this.endTime.split(':')[1]);
			
			nowTime_sec = `01/01/2018 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
			end_time_sec = `01/01/2018 ${endTime_hr}:${endTime_min}:${today.getSeconds()}`;
			
			if(Date.parse(nowTime_sec) < Date.parse(end_time_sec)){
				this.clockWd = (currentHr*60 + currentMin + currentSec/60)*(this.slot_space/60) + this.block_space;
			} else {
				this.clockWd = (Math.abs(start_time_hr - endTime_hr)*60 + endTime_min + currentSec/60)*(this.slot_space/60) + this.block_space;
			}			
			
			if(this.clockWd >= 380){
				this.timerScroll = (currentHr*60 + currentMin + currentSec/60)*(this.slot_space/60);
				this.timercomponent.directiveRef.scrollTo(this.timerScroll, 0, 500);
				this.patientcomponent.directiveRef.scrollTo(this.timerScroll, this.timeline_scroll_y, 500);
			}
			
			today = new Date();
			let secDif: any = (60 - today.getSeconds())*1000;
			
			setTimeout(() => {
				
				today = new Date();
				nowTime_sec = `01/01/2018 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
					
				if(this.clockWd >= 380){
					let checkScrollability: any = this.timercomponent.directiveRef.position();
					if(checkScrollability.x != 'end'){
						this.timerScroll += (this.slot_space/60);
					
						this.timercomponent.directiveRef.scrollTo(this.timerScroll, 0, 500);
						this.patientcomponent.directiveRef.scrollTo(this.timerScroll, this.timeline_scroll_y, 500);
					}
				}
					
				if(Date.parse(nowTime_sec) < Date.parse(end_time_sec)){
					console.log('before interval OPEN');
					
					currentHr = Math.abs(start_time_hr - today.getHours());
					currentMin = today.getMinutes();
					currentSec = today.getSeconds();
					
					this.clockWd = (currentHr*60 + currentMin + currentSec/60)*(this.slot_space/60) + this.block_space;
					
				} else {
					console.log('CLOSE');
					clearInterval(this.clockInterval);
				}
				
				this.clockInterval = setInterval(() =>{
				
					today = new Date();
					nowTime_sec = `01/01/2018 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
					
					if(this.clockWd >= 380){			
						let checkScrollability: any = this.timercomponent.directiveRef.position();
						if(checkScrollability.x != 'end'){
							this.timerScroll += (this.slot_space/60);
						
							this.timercomponent.directiveRef.scrollTo(this.timerScroll, 0, 500);
							this.patientcomponent.directiveRef.scrollTo(this.timerScroll, this.timeline_scroll_y, 500);
						}
					}
					
					
					if(Date.parse(nowTime_sec) < Date.parse(end_time_sec)){
						console.log('within interval OPEN');
						
						currentHr = Math.abs(start_time_hr - today.getHours());
						currentMin = today.getMinutes();
						currentSec = today.getSeconds();
						
						this.clockWd = (currentHr*60 + currentMin + currentSec/60)*(this.slot_space/60) + this.block_space;
						
					} else {
						console.log('CLOSE');
						clearInterval(this.clockInterval);
					}
					
				}, 60000);
				
			}, secDif);
			
			
			
		} else {
			//this.clockWd = 54;
			this.clockWd = this.block_space;
		}
	
	}, 1000);
  }
  
  createTimeGuide(){
	let startTime_hr:any = this.startTime.split(':')[0];
	let startTime_min:any = this.startTime.split(':')[1];
	
	let endTime_hr:any = this.endTime.split(':')[0];
	let endTime_min:any = this.endTime.split(':')[1];
	
	this.endTime_minutes = Number(endTime_min);
	
	this.slot_space = this.timer_width/this.timer_view;
	this.block_space = (this.slot_space/4)/2 + (56+27);
	
	console.log('in guide: ', this.block_space);
	
	let hrDif:any = Math.abs(startTime_hr-endTime_hr) + 1;
	
	this.guidePosArr = [];
	this.timerLabelArr = [];
	this.slotcont_wd = 114;
	this.scrollablecont_wd = 114;
	
	for(let i=0; i<hrDif; i++){
		
		let leftpos:any = (i*this.slot_space) + this.block_space;
		this.guidePosArr.push(leftpos);
		
		let labelHr = Number(startTime_hr) + i;
		if(labelHr > 12){
			labelHr = Math.abs(12-labelHr);
		}
		
		let timelabel: any
		if(labelHr < 10){
			timelabel = `0${labelHr}:00`;
		} else {
			timelabel = `${labelHr}:00`;
		}
		
		if(i < hrDif-1){
			this.slotcont_wd += this.slot_space;
			this.scrollablecont_wd += this.slot_space;
		}
		
		this.timerLabelArr.push(timelabel);
	}
	
	if(this.endTime_minutes > 0 && this.endTime_minutes < 30){
		this.slotcont_wd += this.slot_space/4;
		this.scrollablecont_wd += this.slot_space/4;
	} else if(this.endTime_minutes >= 30 && this.endTime_minutes < 45){
		this.slotcont_wd += (this.slot_space/4)*2;
		this.scrollablecont_wd += (this.slot_space/4)*2;
	} else if(this.endTime_minutes == 45){
		this.slotcont_wd += (this.slot_space/4)*3;
		this.scrollablecont_wd += (this.slot_space/4)*3;
	}
	
	this.slotcont_wd += (this.slot_space/4);
	this.scrollablecont_wd = this.slotcont_wd + 56*2;
	
  }
  
  getView(_view) {
	this.timer_view = _view;
	this.changeView();
  }
  
  changeView() {
	this.slotcont_wd = 114;
	this.scrollablecont_wd = 114;
	this.timerLabelArr = [];
	this.guidePosArr = [];
	this.timerScroll = 0;
	this.timer_width = this.timer.nativeElement.offsetWidth;
	this.timercomponent.directiveRef.scrollTo(this.timerScroll, 0, 0);
	
	this.patientcomponent.directiveRef.scrollTo(this.timerScroll, this.timeline_scroll_y, 0);
	
	this.createTimeGuide();
	
	console.log('change view: ', this.block_space);
	
	this.messageService.sendMessage('createblock', {slot_space: this.slot_space, block_space: this.block_space, timer_view: this.timer_view});
	
	clearInterval(this.checkTimeInterval);
	clearInterval(this.clockInterval);
	
	this.checkTimeInterval = null;
	this.clockInterval = null;
	
	console.log(this.checkTimeInterval, this.clockInterval);
		
	if(this._isToday == true){
		this.clock();
	} else {
		this.clockWd = this.block_space;
		//this.clockWd = 54;
	}
	
  }
  
  slidetimer(dir){
	let checkScrollability: any = this.timercomponent.directiveRef.position();
	
	let move_x = this.slot_space*(this.timer_view - 1) + this.slot_space/2;
	
	if(dir == 'left'){
		if(checkScrollability.x != 'start'){
			this.timerScroll -= move_x;
		}
	} else {
		if(checkScrollability.x != 'end'){
			this.timerScroll += move_x;
		}
	}
	
	this.timercomponent.directiveRef.scrollTo(this.timerScroll, 0, 500);
	this.patientcomponent.directiveRef.scrollTo(this.timerScroll, this.timeline_scroll_y, 500);
  }

}
