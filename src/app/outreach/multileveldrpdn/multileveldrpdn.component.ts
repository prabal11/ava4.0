import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multileveldrpdn',
  templateUrl: './multileveldrpdn.component.html',
  styleUrls: ['./multileveldrpdn.component.css']
})
export class MultileveldrpdnComponent implements OnInit {
	
	@Input() multidrpdndata: any;
	
  constructor() { }

  ngOnInit() {
  
	this.multidrpdndata.map(dditem => {
		dditem['opendrpdn'] = false;
			dditem.ddoptions.map(suboptn => {
				suboptn['opensubdrpdn'] = false;
				suboptn['selectedOptn'] = '';
			})
	});
  }
  
  toogleDropdown(sel_indx) {
	this.multidrpdndata.map((dditem, indx) => {
		if(indx != sel_indx){
			dditem['opendrpdn'] = false;
			dditem.ddoptions.map(suboptn => {
				suboptn['opensubdrpdn'] = false;
			})
			
		}
	});
	
	this.multidrpdndata[sel_indx]['opendrpdn'] = this.multidrpdndata[sel_indx]['opendrpdn'] == true ? false : true;
  }
  
  toggleSubdrpndn(sel_indx, subdrpdn) {
	this.multidrpdndata[sel_indx].ddoptions.map((suboptn, suboptnindx) => {
		
		if(suboptnindx != subdrpdn){
			suboptn['opensubdrpdn'] = false;
		}
	})
	
	
	this.multidrpdndata[sel_indx].ddoptions[subdrpdn]['opensubdrpdn'] = this.multidrpdndata[sel_indx].ddoptions[subdrpdn]['opensubdrpdn'] == true ? false : true;
	
	
  }
  
  selectedOptn(sel_indx, subdrpdn, optnindx) {
	
	console.log(optnindx, this.multidrpdndata[sel_indx].ddoptions[subdrpdn].suboptn[optnindx].title);
	
	this.multidrpdndata[sel_indx].ddoptions[subdrpdn]['selectedOptn'] = this.multidrpdndata[sel_indx].ddoptions[subdrpdn].suboptn[optnindx].title
  }

}
