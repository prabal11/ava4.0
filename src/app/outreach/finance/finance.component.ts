import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
	
	@ViewChild('financecontent') financecontent: ElementRef;
	
	markerlblArr: any[] = [{'label': '$200'}, {'label': '$200'}, {'label': '$200'}, {'label': '$200'}, {'label': '$200'}];
	markerdata1: any = {'ontrack': false, 'value': '96'};
	
	markerlblArr2: any[] = [{'label': '$0'}, {'label': '$0'}, {'label': '$0'}, {'label': '$0'}, {'label': ''}];
	markerdata2: any = {'ontrack': true, 'value': '0'};
	
	markerlblArr3: any[] = [{'label': '$250'}, {'label': '$0'}, {'label': '$0'}, {'label': '$0'}, {'label': ''}];
	markerdata3: any = {'ontrack': true, 'value': '18'};
	
	relnData:any[] = [
		{'relationtype': 'MO', 'name': 'Clarissa Marcum', 'email': 'marcumclarissa@gmail.com', 'mobile':'(555) 555-1363', 'employer': 'Kirkland & Ellis law', 'carrier': 'Aetna', 'group': '787-54-3323', 'street':'1314 Emery ave.', 'city':'Encinitas, CA', 'zip': '92109', 'fulladdress': '1314 Emery ave. Encinitas, CA 92109', 'phone': '(555) 555-7721', 'dob': '11/07/1978', 'ssn': '888-88-8888', 'emplrid': '23648503843', 'allrelation': [{'relationtype': 'CH', 'name': 'Stella Goslin'}, {'relationtype': 'CH', 'name': 'Lydia Goslin'}]},
		
		{'relationtype': 'FA', 'name': 'Peter K. Goslin', 'email': 'peter_goslin@gmail.com', 'mobile':'(555) 555-9611', 'employer': 'Trifin Labs', 'carrier': 'Blue Cross of Washington', 'group': '543-99-3333', 'street':'1800 Grand ave.', 'city':'San Diego, CA', 'zip': '92109', 'fulladdress': '1800 Grand ave. San Diego, CA 92109', 'phone': '(555) 555-4782', 'dob': '05/20/1975', 'ssn': '888-88-8888', 'emplrid': '83810984892', 'allrelation': [{'relationtype': 'CH', 'name': 'Stella Goslin'}, {'relationtype': 'CH', 'name': 'Lydia Goslin'}, {'relationtype': 'CH', 'name': 'Maverick Goslin'}]},
		
		{'relationtype': 'SA', 'name': 'Spencer Marcum', 'email': 'spen.mar@gmail.com', 'mobile':'(555) 555-1363', 'employer': '', 'carrier': '', 'group': '', 'street':'1314 Emery ave.', 'city':'Encinitas, CA', 'zip': '92109', 'fulladdress': '1314 Emery ave. Encinitas, CA 92109', 'phone': '', 'dob': '09/23/1973', 'ssn': '', 'emplrid': '', 'allrelation': [{'relationtype': 'CH', 'name': 'Stella Goslin'}, {'relationtype': 'CH', 'name': 'Lydia Goslin'}]},
	];
	
	selectedItem: any;
	pagetitlepos: any = 0;
	
	
	showLedger: boolean = false;
	showInsruance: boolean = false;
	showPayschedule: boolean = false;

  constructor() { }

  ngOnInit() {
	
	//this.pagetitlepos = (window.innerHeight - 144 - 70 - 4) - this.financecontent.nativeElement.offsetHeight/2;
	
	setTimeout(() => {
		this.pagetitlepos = (window.innerHeight - 144 - 70 - 4) - this.financecontent.nativeElement.offsetHeight - 50;
	})
	
  }
  
  showSection(whichsection) {
	if(whichsection == 'ledger'){
		this.showLedger = this.showLedger == true ? false : true;
	} else if(whichsection == 'insurance'){
		this.showInsruance = this.showInsruance == true ? false : true;
	} else if(whichsection == 'payschedule'){
		this.showPayschedule = this.showPayschedule == true ? false : true;
	}
		
	setTimeout(() => {
		let contHt = window.innerHeight - 144 - 70 - 4;
		
		if(this.financecontent.nativeElement.offsetHeight > contHt){
			this.pagetitlepos = 20;
		} else {
			this.pagetitlepos = (window.innerHeight - 144 - 70 - 4) - this.financecontent.nativeElement.offsetHeight - 50;
		}
	})
	
  }
  
  selectRelation(indx) {
	this.selectedItem = this.relnData[indx];
	
	setTimeout(() => {
		let contHt = window.innerHeight - 144 - 70 - 4;
		
		if(this.financecontent.nativeElement.offsetHeight > contHt){
			this.pagetitlepos = 20;
		} else {
			this.pagetitlepos = (window.innerHeight - 144 - 70 - 4) - this.financecontent.nativeElement.offsetHeight - 50;
		}
	})
  }

}
