import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-ddoptions',
  templateUrl: './selected-ddoptions.component.html',
  styleUrls: ['./selected-ddoptions.component.css']
})
export class SelectedDDOptionsComponent implements OnInit {
	
	@Input() drpdndata: any;

	constructor() { }

	ngOnInit() {
		this.drpdndata.map(dditem => {
			dditem['opendrpdn_edit'] = false;
		});
	}
	
	toogleDropdown(sel_indx) {
		this.drpdndata.map((dditem, indx) => {
			if(indx != sel_indx){
				dditem['opendrpdn_edit'] = false;
			}
		});

		this.drpdndata[sel_indx]['opendrpdn_edit'] = this.drpdndata[sel_indx]['opendrpdn_edit'] == true ? false : true;
	}

}
