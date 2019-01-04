import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acordionddn',
  templateUrl: './acordionddn.component.html',
  styleUrls: ['./acordionddn.component.css']
})
export class AcordionddnComponent implements OnInit {
	
	@Input() drpdndata: any;
	
	
  constructor() { }

  ngOnInit() {
	
	this.drpdndata.map(dditem => {
		dditem['opendrpdn'] = false;
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
  
  selectedoption(indx, optnindx) {
	
	/*console.log(this.drpdndata[indx].ddoptions[optnindx]);*/
	
	this.drpdndata[indx].ddoptions[optnindx].selected = this.drpdndata[indx].ddoptions[optnindx].selected == false ? true : false;
	
  }

}
