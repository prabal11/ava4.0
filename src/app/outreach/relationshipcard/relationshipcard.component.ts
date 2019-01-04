import { Component, OnInit, Output, EventEmitter, Inject, ElementRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-relationshipcard',
  templateUrl: './relationshipcard.component.html',
  styleUrls: ['./relationshipcard.component.css']
})
export class RelationshipcardComponent implements OnInit {
	
	@Output() goback = new EventEmitter();
	
	relnData:any[] = [
		{'relationtype': 'MO', 'name': 'Clarissa Marcum', 'email': 'marcumclarissa@gmail.com', 'mobile':'(555) 555-1363', 'employer': 'Kirkland & Ellis law', 'carrier': 'Aetna', 'group': '787-54-3323', 'street':'1314 Emery ave.', 'city':'Encinitas, CA', 'zip': '92109', 'fulladdress': '1314 Emery ave. Encinitas, CA 92109', 'phone': '(555) 555-7721', 'dob': '11/07/1978', 'ssn': '888-88-8888', 'emplrid': '23648503843', 'allrelation': [{'relationtype': 'CH', 'name': 'Stella Goslin'}, {'relationtype': 'CH', 'name': 'Lydia Goslin'}]},
		
		{'relationtype': 'FA', 'name': 'Peter K. Goslin', 'email': 'peter_goslin@gmail.com', 'mobile':'(555) 555-9611', 'employer': 'Trifin Labs', 'carrier': 'Blue Cross of Washington', 'group': '543-99-3333', 'street':'1800 Grand ave.', 'city':'San Diego, CA', 'zip': '92109', 'fulladdress': '1800 Grand ave. San Diego, CA 92109', 'phone': '(555) 555-4782', 'dob': '05/20/1975', 'ssn': '888-88-8888', 'emplrid': '83810984892', 'allrelation': [{'relationtype': 'CH', 'name': 'Stella Goslin'}, {'relationtype': 'CH', 'name': 'Lydia Goslin'}, {'relationtype': 'CH', 'name': 'Maverick Goslin'}]},
		
		{'relationtype': 'SA', 'name': 'Spencer Marcum', 'email': 'spen.mar@gmail.com', 'mobile':'(555) 555-1363', 'employer': '', 'carrier': '', 'group': '', 'street':'1314 Emery ave.', 'city':'Encinitas, CA', 'zip': '92109', 'fulladdress': '1314 Emery ave. Encinitas, CA 92109', 'phone': '', 'dob': '09/23/1973', 'ssn': '', 'emplrid': '', 'allrelation': [{'relationtype': 'CH', 'name': 'Stella Goslin'}, {'relationtype': 'CH', 'name': 'Lydia Goslin'}]},
	];
	
	selectedItem: any = null;
	selectedRelationItem: any = null;
	relationtype: any = null;
	posLeft: any = 0;
	
	phonemask: any = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	dobmask: any = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
	
	/*
	dobmask = []
	*/
	
	
	showInputForm: boolean = false;

  constructor(public relationTypedd: MatDialog) { }

  ngOnInit() {
  }
  
  showSelectedDetails(item) {
	this.showInputForm = false;
	this.selectedItem = item;
	this.relationtype = this.selectedItem.relationtype;
  }
  
  backtoMain() {
	this.goback.emit('back');
  }
  
  openList(evt: MouseEvent) {
	const target = new ElementRef(evt.currentTarget);
		let dialog_config: any = {data: { trigger: target}, backdropClass: 'cdk-overlay-transparent-backdrop', panelClass: 'relationpanelClass'};

		const dialogRef = this.relationTypedd.open(RelationTypeDropdown, dialog_config);
		
		dialogRef.afterClosed().subscribe( _res => {
			if(_res != undefined){
				this.selectedRelationItem = _res.value;
			}
		});
  }
  
  gotoInput() {
	/*this.posLeft -= 200;*/
	
	this.showInputForm = true;
  }
  
  backtoPrevious() {
	this.posLeft = 0;
  }

}

@Component({
  selector: 'app-drpdn-component',
  templateUrl: './drpdn.component.html',
  styleUrls: ['./drpdn.component.css']
})
export class RelationTypeDropdown implements OnInit {
  private readonly _matDialogRef: MatDialogRef<RelationTypeDropdown>;
  private readonly triggerElementRef: ElementRef;
  
  listarr:any[] = [
	{'label': 'MO', value: 'MO'},
	{'label': 'FA', value: 'FA'},
	{'label': 'SM', value: 'SM'},
	{'label': 'SF', value: 'SF'},
	{'label': 'SP', value: 'SP'},
	{'label': 'GM', value: 'GM'},
	{'label': 'GF', value: 'GF'},
	{'label': 'AU', value: 'AU'},
	{'label': 'UN', value: 'UN'},
	{'label': 'FP', value: 'FP'},
	{'label': 'PR', value: 'PR'},
	{'label': 'OT', value: 'OT'},
	]
  
  _selectedItem: any;
  zoomviewport: any = 1;
  
  constructor(_matDialogRef: MatDialogRef<RelationTypeDropdown>, @Inject(MAT_DIALOG_DATA) data: { trigger: ElementRef}) {
    this._matDialogRef = _matDialogRef;
    this.triggerElementRef = data.trigger;	
  }

  ngOnInit() {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
	
	if(window.localStorage.getItem('zoomview') != null || window.localStorage.getItem('zoomview') != undefined) {
		this.zoomviewport = Number(window.localStorage.getItem('zoomview'))/100;
	}
		
	matDialogConfig.position = { left: `${(rect.left)}px`, top: `${rect.top + 18}px` };
    
    matDialogConfig.width = '40px';
    matDialogConfig.height = '210px';
	
    this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this._matDialogRef.updatePosition(matDialogConfig.position);
  }
  
  cancel(): void {
    this._matDialogRef.close(null);
  }
  
  selectedItem(_value, _item){
	if(this._selectedItem != _item){
		this._selectedItem = _item;
		this._matDialogRef.close({'value': _value});
	} else {
		this._matDialogRef.close(null);
	}
  } 
}
