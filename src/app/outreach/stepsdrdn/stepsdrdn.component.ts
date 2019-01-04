import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepsdrdn',
  templateUrl: './stepsdrdn.component.html',
  styleUrls: ['./stepsdrdn.component.css']
})
export class StepsdrdnComponent implements OnInit {
	
	@Input() drpdndata: any;
	
  constructor() { }

  ngOnInit() {
	
	this.drpdndata.map((dditem, indx) => {
		if(indx == 0){
			dditem['opendrpdn'] = true;
		} else {
			dditem['opendrpdn'] = false;
		}
		
	});
	
  }
  
  toogleDropdown(sel_indx) {
	this.drpdndata.map((dditem, indx) => {
		if(indx != sel_indx){
			dditem['opendrpdn'] = false;
		}
	});
	
	this.drpdndata[sel_indx]['opendrpdn'] = this.drpdndata[sel_indx]['opendrpdn'] == true ? false : true;
	
  }
  
  selectedOptn(sel_indx, optn_indx) {
	
	this.drpdndata[sel_indx].ddoptions[optn_indx].selected = this.drpdndata[sel_indx].ddoptions[optn_indx].selected == false ? true : false;
	
  }

}
