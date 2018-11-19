import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
	
	@ViewChild('profilescroll') profilescroll: PerfectScrollbarComponent;
	
	search_options: string[] = ['Becca Kurfin', 'Beckham Gray', 'Becky Smith', 'Belamy Wilson', 'Berry Holmes', 'Bethany Roland'];
	showlastList: boolean = false;
	
	
	diagnosisArr: any [] = [
		{'title': 'Profile', 'ddoptions': [
			{'title': 'Facial Type', 'suboptn': [
				{'title': 'Dolichocephalic'},
				{'title': 'Brachycephalic'},
				{'title': 'Normocephalic'},
				{'title': 'Mesofacial'},
			]},
			{'title': 'Facial Profile (Convexity)', 'suboptn': []},
			{'title': 'Nasolabial Angle', 'suboptn': [{'title': 'Dolichocephalic'},
				{'title': 'Brachycephalic'},]},
			{'title': 'Facial Divergence', 'suboptn': []},
			{'title': 'Lips', 'suboptn': []}
		]},
		
		{'title': 'Frontal', 'ddoptions': []},
		{'title': 'TMJ', 'ddoptions': []},
		{'title': 'Perio', 'ddoptions': [
			{'title': 'Facial Type', 'suboptn': [
					{'title': 'Dolichocephalic'},
					{'title': 'Brachycephalic'},
					{'title': 'Normocephalic'},
					{'title': 'Mesofacial'},
				]}
		]},
		{'title': 'Other', 'ddoptions': []},
		{'title': 'Dentition', 'ddoptions': []},
		{'title': 'Intra Oral', 'ddoptions': []},
	];
	
	lastlistArr: any[] = [{name: 'Obi- Wan Kenobi'}, {name: 'Sheeve Palpatine'}, {name: 'Jar Jar Binks'}, {name: 'Darth Maul'}, {name: 'Qui - Gonn Jinn'}, {name: 'Padme Amidala'}, {name: 'Sio Bibble'}, {name: 'Poe Dameron'}, {name: 'Aayla Secura'}, {name: 'Jessika Pava'}];
	
	chair_labelArr: any[] = [{label: '1', patient: 'Sheev Palpatine', dr: 'Dr. Roberts', seated: '07:32', progress: '100', bookingtime: '1 hr', bookingtimeMin: null, excesstime: '+16m'}, {label: '5', patient: "Padme Amidala", dr: null, seated: '8:28', 'progress': 80, bookingtime: null, bookingtimeMin: '45m', excesstime: 0}, {label: '3', patient: 'Qui-Gonn Jinn', dr: 'Dr. Tobler', seated: '07:45', progress: '100', bookingtime: null, bookingtimeMin: '45m', excesstime: 0}, {label: '4', patient: 'Aayla Secura', dr: 'Dr. Doria', seated: '8:03', progress: '50', bookingtime: '1 hr', bookingtimeMin: null, excesstime: 0}];
	
	patientInChair: any = {label: '9', patient: 'Stella Goslin', dr: 'Dr. Roberts', seated: '08:28', progress: '40', bookingtime: null, bookingtimeMin: '10m', excesstime: null};
	
	windowHt: any;
	zoomviewport: any = 100;
	
	windowContHt: any;
	
	treatmentArr: any[] = [
		{"date": "11/30/18 09:43 a", "UW": "019x025N", "LW": "", "Hyg": "+", "Appl": "", "St": "JP", "dr": "Thom", "notes": "Trimmed U de's - gave pt wax to help cheek heal", "next_notes": "Eval Only", "Proc": "Eval", "U": "", "Wks": "6 wks"},
		
		{"date": "11/14/18 04:22 p", "UW": "", "LW": "018nit", "Hyg": "+", "Appl": "Cont", "St": "LF", "dr": "Thom", "notes": "Cont. U clear ret. FT", "next_notes": "6 mo Ret Ck Dec 2018", "Proc": "Ret", "U": "", "Wks": ""},
		
		{"date": "08/14/18 07:55 a", "UW": "019x025N", "LW": "018nit", "Hyg": "+", "Appl": "Cont", "St": "LF", "dr": "Thom", "notes": "CUW Chain UR6-UL2 L 7-7 Reshape U 1's Start gor tri’s off 3's", "next_notes": "", "Proc": "Keep", "U": "", "Wks": "3 mo"},
		
		{"date": "06/30/18 09:43 a", "UW": "", "LW": "", "Hyg": "+", "Appl": "", "St": "KK", "dr": "Thom", "notes": "Retie chk 7's", "next_notes": "Retie", "Proc": "Ret", "U": "", "Wks": "5 wk"},
		
		{"date": "03/02/18 09:22 a", "UW": "019x025N", "LW": "018nit", "Hyg": "+", "Appl": "Cont", "St": "LF", "dr": "Thom", "notes": "L18x25NITI", "next_notes": "U/18X25NITI", "Proc": "", "U": "", "Wks": ""},
		
		{"date": "12/28/17 07:32 a", "UW": "", "LW": "018nit", "Hyg": "+", "Appl": "", "St": "MR", "dr": "Rem", "notes": "Z Bend U 1's Ck Sp Closure", "next_notes": "Ck DB", "Proc": "Eval", "U": "", "Wks": ""},
		
		{"date": "12/28/17 07:32 a", "UW": "", "LW": "018nit", "Hyg": "+", "Appl": "", "St": "MR", "dr": "Rem", "notes": "Z Bend U 1's Ck Sp Closure", "next_notes": "Ck DB", "Proc": "Eval", "U": "", "Wks": ""},
		
		{"date": "09/12/17 09:40 a", "UW": "", "LW": "018nit", "Hyg": "+", "Appl": "Cont", "St": "JP", "dr": "Rem", "notes": "PT in for emerg LR5 off, replaced bracket", "next_notes": "Keep NV", "Proc": "Eval", "U": "", "Wks": "3 mo"},
		
		{"date": "07/28/17 03:45 p", "UW": "", "LW": "018nit", "Hyg": "-", "Appl": "Cont", "St": "MR", "dr": "Thom", "notes": "Retie LR3 in box", "next_notes": "A-CH", "Proc": "Ret", "U": "", "Wks": "6 wk"},
		
		{"date": "06/29/17 07:55 a", "UW": "019x025N", "LW": "018nit", "Hyg": "+", "Appl": "", "St": "KK", "dr": "Rem", "notes": "Ret3", "next_notes": "Ret4", "Proc": "Eval", "U": "", "Wks": "1 mo"},
		
		{"date": "10/14/16 02:52 p", "UW": "", "LW": "018nit", "Hyg": "+", "Appl": "Cont", "St": "KK", "dr": "Thom", "notes": "Cut L/AW Distal to 6's TQ U/Post", "next_notes": "956-DB full 3-3, Imp Pano/Ceph", "Proc": "", "U": "", "Wks": ""},
		
		{"date": "04/20/16 07:50 a", "UW": "", "LW": "018nit", "Hyg": "+", "Appl": "", "St": "LF", "dr": "Thom", "notes": "CUW Chain UR6-UL2 L 7-7", "next_notes": "", "Proc": "Keep", "U": "", "Wks": "6 mo"},
		
		{"date": "03/25/16 07:55 a", "UW": "", "LW": "", "Hyg": "+", "Appl": "", "St": "KK", "dr": "Rem", "notes": "Mesial out lower left 2. Chain U & L 6-6", "next_notes": "NV check lower left 2 & Verticas", "Proc": "Eval", "U": "", "Wks": "1 mo"},
		
		{"date": "10/14/16 02:52 p", "UW": "", "LW": "018nit", "Hyg": "+", "Appl": "Cont", "St": "KK", "dr": "Thom", "notes": "Ret2", "next_notes": "Ret3", "Proc": "Eval", "U": "", "Wks": ""},
	]
	
  constructor() { }

  ngOnInit() {
	
	/*this.windowHt = window.innerHeight - 138 - 70;*/
	
	if(window.localStorage.getItem('zoomview') != null || window.localStorage.getItem('zoomview') != undefined) {
		this.zoomviewport = Number(window.localStorage.getItem('zoomview'));
	}
	
	this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 138 - 70);
	this.windowContHt = window.innerHeight - 138 - 70 - 4;
	
  }
  
  showLast() {
		this.showlastList = this.showlastList === true ? false : true;
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
		
		this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 138 - 70);
		
		setTimeout(() => {
			this.profilescroll.directiveRef.update();
		}, 500);
		
		
		
		window.localStorage.setItem('zoomview', this.zoomviewport);
	}

}
