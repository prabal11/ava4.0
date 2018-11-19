import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardaccordion',
  templateUrl: './cardaccordion.component.html',
  styleUrls: ['./cardaccordion.component.css']
})
export class CardaccordionComponent implements OnInit {
	
	toggleclass: any = [
		{'card-elem': true, 'accordclose': false}, 
		{'card-elem': true, 'accordclose': true}
	];
	
	contentClass: any = [
		{'card-accord-content': true, 'showcontent': true},
		{'card-accord-content': true, 'showcontent': false}
	];
	
	txPlanArr: any[] = [
		{'title': 'Next Step', 'ddoptions': []}, 
		{'title': 'Type of Treatment', 'ddoptions': [
				{'title': 'Facemask'},
				{'title': 'Palatal Expander'},
				{'title': 'RPE'}]},
		{'title': 'Surgery', 'ddoptions': []},
		{'title': 'Appliances', 'ddoptions': [
				{'title': 'Upper braces'},
				{'title': 'Lower braces'},
				{'title': 'Facemask'},
				{'title': 'Palatal Expander'},
				{'title': 'RPE'},
				{'title': 'Bihelix'},
				{'title': 'Tongue crib'},
				{'title': 'NTI'},
				{'title': 'Forsus'},
				{'title': 'MARPE'},
				{'title': 'Anterior Bite Plate'},
				{'title': 'Elastics'},
				{'title': 'Niteguard'},
				{'title': 'MIA'},
				{'title': 'Functional Appliance'},
				{'title': 'Headgear'},
				{'title': 'Reserve headgear'},
				{'title': 'Upper TMJ splint'},
				{'title': 'Upper retainer'},
				{'title': 'Lower retainer'},
				{'title': 'Orthotic'},
				{'title': 'Carriere'},
				{'title': 'Upper 2x4'},
				{'title': 'Lower 2x4'},
				{'title': 'Fan Expanders'},
				{'title': 'TADs'},
				{'title': 'Occulusals'},
				{'title': 'Splint'},
				{'title': 'Upper Schwartz'},
				{'title': 'Lower Schwartz'},
				{'title': 'Upper Sagital'},
				{'title': 'Lower Sagital'},
				{'title': 'Bionator'},
				{'title': 'Frankel ll'},
				{'title': 'Nance Holding Arch'},
			]
		},
		{'title': 'Elastic Wear', 'ddoptions': []},
		{'title': 'Invisalign', 'ddoptions': []},
		{'title': 'Treatment Time Estimate', 'ddoptions': []},
		{'title': 'Retainer Period', 'ddoptions': []},
	];

  constructor() { }

  ngOnInit() {
  }
  
  toggleAccordion(indx) {
	
	this.toggleclass.map(panel => {
		panel['accordclose'] = true;
	});
	
	this.toggleclass[indx]['accordclose'] = false;
	
	this.contentClass.map(cont => {
		cont['showcontent'] = false;
	});
	
	this.contentClass[indx]['showcontent'] = true;
	
  }

}
