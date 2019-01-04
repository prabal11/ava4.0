import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';

/*import { NgxIndexedDB } from 'ngx-indexed-db';*/

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
	
	
	
	windowHt: any;
	zoomviewport: any = 100;
	
	windowContHt: any;
	tableHt: any;
	
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
	];
	
	slideArr:any[] = [{'slidename': 'relationship', show: false}];
	animateFirstCard: any = 0;
	currentSlide: any = 0;
	
	rotateOnY: any = 0;
	diagnosticRotateY: any = 0;
	
	consq_visit = false;
	
  constructor(public todoListDialog: MatDialog) { }

  ngOnInit() {
	
	/*this.windowHt = window.innerHeight - 138 - 70;*/
	
	
	/*console.log("visit date: ", window.localStorage.getItem('visitdate'))*/
	
	
	let today:any = new Date();
	let visitDate: any = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
	
	if(window.localStorage.getItem('visitdate') != null || window.localStorage.getItem('visitdate') != undefined){
		let storagevisitDate = window.localStorage.getItem('visitdate');
		
		if(visitDate == storagevisitDate){
			this.consq_visit = true;
			this.diagnosticRotateY = -180;
		} else {
			this.consq_visit = false;
			
			
		}
		
	}
	
	window.localStorage.setItem('visitdate', visitDate);
	
	/*console.log('this.consq_visit', this.consq_visit);*/
	
	
	if(window.localStorage.getItem('zoomview') != null || window.localStorage.getItem('zoomview') != undefined) {
		this.zoomviewport = Number(window.localStorage.getItem('zoomview'));
	}
	
	this.windowHt = (window.innerHeight/(this.zoomviewport/100) - 138 - 70);
	this.windowContHt = window.innerHeight - 144 - 70 - 4;
	
	this.tableHt = this.windowContHt - 681;
	if(this.tableHt < 0){
		this.tableHt = 70;
	}
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
	
	/*openTodoList(evt: MouseEvent) {
		
		const target = new ElementRef(evt.currentTarget);
			let dialog_config: any = {data: { trigger: target}, backdropClass: 'cdk-overlay-transparent-backdrop', panelClass: 'searchboxClass'};

			const dialogRef = this.todoListDialog.open(TodoListDialog, dialog_config);
			
			dialogRef.afterClosed().subscribe( _res => {
				if(_res != undefined){
					//console.log(_res);
				}
			});
	}*/
	
	gotoNextSlide(slideNum){
		this.currentSlide = slideNum;
		this.slideArr[this.currentSlide].show = true;
		this.animateFirstCard -= 200;
	}
	
	goback(evt){
		if(evt == 'back'){
			/*this.animateFirstCard = 0;
			setTimeout(() => {
				this.slideArr[this.currentSlide].show = false;
			}, 500);*/
			
			this.rotateOnY -= 180;
		}
	}
	
	flipSlide(){
		this.rotateOnY -= 180;
	}
	
	diagnosticRot() {
		this.diagnosticRotateY -= 180;
	}

}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class TodoListDialog implements OnInit {
  private readonly _matDialogRef: MatDialogRef<TodoListDialog>;
  private readonly triggerElementRef: ElementRef;
  
  tolistArr: any[] = [
	{'desc': 'Update Pano', 'date': 'Nov 5.', 'checked': true, 'pastdate': false},
	{'desc': '(MO) Clarissa Marcum needs to sign Hippa release form.', 'date': 'Nov 7', 'checked': false, 'pastdate': true},
	{'desc': 'Send extraction letter to Dr. Smith', 'date': 'Nov 7', 'checked': false, 'pastdate': false},
	{'desc': 'Refer patient to periodontist', 'date': 'Nov 7', 'checked': false, 'pastdate': false},
	{'desc': 'Thank patient for Jackie Mendoza refferal', 'date': 'Nov 7', 'checked': false, 'pastdate': false},
	{'desc': 'Update Pano', 'date': 'April 7, 2019', 'checked': false, 'pastdate': false},
	];
	
	checkedIcon: any[] = [];
	allChecked: boolean = false;
	showAddtodo = false;
	
	@ViewChild('descptn') descptn: ElementRef;
	@ViewChild('dt') dt: ElementRef;
	@ViewChild('todolistscroll') todolistscroll: PerfectScrollbarComponent;
  
  constructor(_matDialogRef: MatDialogRef<TodoListDialog>, @Inject(MAT_DIALOG_DATA) data: { trigger: ElementRef}) {
    this._matDialogRef = _matDialogRef;
    this.triggerElementRef = data.trigger;
	
  }

  ngOnInit() {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
			
	matDialogConfig.position = { left: `${rect.left - (190-14)/2}px`, top: `${(rect.bottom - 23)}px` };
    
    matDialogConfig.width = '190px';
    matDialogConfig.height = '220px';
	
    this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this._matDialogRef.updatePosition(matDialogConfig.position);
	
	this.tolistArr.map(() => {
		this.checkedIcon.push({'checked-icon': true, showcheckicon: false});
	})
  }
  
  cancel(): void {
    this._matDialogRef.close(null);
  }
  
  mouseOver(indx, dir){
	if(dir == 'over'){
		this.checkedIcon[indx]['showcheckicon'] = true;
	} else {
		this.checkedIcon[indx]['showcheckicon'] = false;
	}
  }
  
  checkedTodoItem(indx){
	this.tolistArr[indx].checked = true;
	
	for(let i=0; i<this.tolistArr.length; i++){
		if(this.tolistArr[i].checked == true){
			this.allChecked = true;
		} else {
			this.allChecked = false;
			break;
		}
	}
  }
  
  showAddtodoInput(){
	this.showAddtodo = true;
  }
  
  addTodoItem(evt){
	
	if(this.descptn.nativeElement.value != '' && this.dt.nativeElement.value != '' && evt.which == 13){
		this.tolistArr.push({'desc': this.descptn.nativeElement.value, 'date': this.dt.nativeElement.value, 'checked': false, 'pastdate': false});
		this.checkedIcon.push({'checked-icon': true, showcheckicon: false});
		this.allChecked = false;
		
		this.descptn.nativeElement.value = '';
		this.dt.nativeElement.value = '';
		
		this.descptn.nativeElement.blur();
		this.dt.nativeElement.blur();
		
		setTimeout(() => {
			this.todolistscroll.directiveRef.scrollToBottom(0, 300);
		}, 500);
		
		
	}
	
  }
}
