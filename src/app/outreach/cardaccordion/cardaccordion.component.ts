import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardaccordion',
  templateUrl: './cardaccordion.component.html',
  styleUrls: ['./cardaccordion.component.css']
})
export class CardaccordionComponent implements OnInit {
	
	toggleclass: any = [
		{'card-elem': true, 'flipcard1': true, 'accordclose': false}, 
		{'card-elem': true, 'flipcard1': true, 'accordclose': true},
		{'card-elem': true, 'flipcard1': true, 'accordclose': true},
	];
	
	toggleclassBack: any = [
		{'card-elem': true, 'flipcard2': true}, 
		{'card-elem': true, 'flipcard2': true},
		{'card-elem': true, 'flipcard2': true},
	];
	
	contentClass: any = [
		{'card-accord-content': true, 'showcontent': true},
		{'card-accord-content': true, 'showcontent': false},
		{'card-accord-content': true, 'showcontent': false},
	];
	
	txPlanArr: any[] = [
		{'title': 'Next Step', 'ddoptions': []}, 
		{'title': 'Type of Treatment', 'ddoptions': [
				{'title': 'Facemask', 'selected': false},
				{'title': 'Palatal Expander', 'selected': false},
				{'title': 'RPE', 'selected': false}]},
		{'title': 'Surgery', 'ddoptions': []},
		{'title': 'Appliances', 'ddoptions': [
				{'title': 'Upper braces', 'selected': false},
				{'title': 'Lower braces', 'selected': false},
				{'title': 'Facemask', 'selected': false},
				{'title': 'Palatal Expander', 'selected': false},
				{'title': 'RPE', 'selected': false},
				{'title': 'Bihelix', 'selected': false},
				{'title': 'Tongue crib', 'selected': false},
				{'title': 'NTI', 'selected': false},
				{'title': 'Forsus', 'selected': false},
				{'title': 'MARPE', 'selected': false},
				{'title': 'Anterior Bite Plate', 'selected': false},
				{'title': 'Elastics', 'selected': false},
				{'title': 'Niteguard', 'selected': false},
				{'title': 'MIA', 'selected': false},
				{'title': 'Functional Appliance', 'selected': false},
				{'title': 'Headgear', 'selected': false},
				{'title': 'Reserve headgear', 'selected': false},
				{'title': 'Upper TMJ splint', 'selected': false},
				{'title': 'Upper retainer', 'selected': false},
				{'title': 'Lower retainer', 'selected': false},
				{'title': 'Orthotic', 'selected': false},
				{'title': 'Carriere', 'selected': false},
				{'title': 'Upper 2x4', 'selected': false},
				{'title': 'Lower 2x4', 'selected': false},
				{'title': 'Fan Expanders', 'selected': false},
				{'title': 'TADs', 'selected': false},
				{'title': 'Occulusals', 'selected': false},
				{'title': 'Splint', 'selected': false},
				{'title': 'Upper Schwartz', 'selected': false},
				{'title': 'Lower Schwartz', 'selected': false},
				{'title': 'Upper Sagital', 'selected': false},
				{'title': 'Lower Sagital', 'selected': false},
				{'title': 'Bionator', 'selected': false},
				{'title': 'Frankel ll', 'selected': false},
				{'title': 'Nance Holding Arch', 'selected': false},
			]
		},
		{'title': 'Elastic Wear', 'ddoptions': []},
		{'title': 'Invisalign', 'ddoptions': []},
		{'title': 'Treatment Time Estimate', 'ddoptions': []},
		{'title': 'Retainer Period', 'ddoptions': []},
	];
	
	nonExtractionPlanArr: any[] = [
		{'title': 'Non-Extraction Plan', 'ddoptions': [
			{'title': 'Hyrax', 'duration': '3 wks', 'selected': false},
			{'title': 'OBS/monitor primary exfoliation', 'duration': '1 mo', 'selected': false},
			{'title': 'Maxillary 2x4 prn', 'duration': '2 wks', 'selected': false},
			{'title': 'Maxillary TT prn', 'duration': '1 mo', 'selected': false},
			{'title': 'Band/bond both arches', 'duration': '1 mo', 'selected': false},
			{'title': 'Level & align', 'duration': '3 mo', 'selected': false},
			{'title': 'Details and elastics', 'duration': '3 wks', 'selected': false},
			{'title': 'Ret: Standard Hawley & Tru-Tain', 'duration': '2 wks', 'selected': false},
			{'title': 'Evaluation 3rd molars', 'duration': '2 wks', 'selected': false}
		]},
	];
	
	txPlanArrSelected: any[] = [
		{'title': 'Next Step', 'ddoptions': []}, 
		{'title': 'Type of Treatment', 'ddoptions': [
				{'title': 'Facemask', 'selected': false},
				{'title': 'Palatal Expander', 'selected': false},
				{'title': 'RPE', 'selected': false}]},
		{'title': 'Surgery', 'ddoptions': []},
		{'title': 'Appliances', 'ddoptions': [
				{'title': 'Upper braces', 'selected': true},
				{'title': 'Lower braces', 'selected': true},
				{'title': 'Facemask', 'selected': false},
				{'title': 'Palatal Expander', 'selected': false},
				{'title': 'RPE', 'selected': false},
				{'title': 'Bihelix', 'selected': false},
				{'title': 'Tongue crib', 'selected': false},
				{'title': 'NTI', 'selected': false},
				{'title': 'Forsus', 'selected': false},
				{'title': 'MARPE', 'selected': false},
				{'title': 'Anterior Bite Plate', 'selected': false},
				{'title': 'Elastics', 'selected': false},
				{'title': 'Niteguard', 'selected': false},
				{'title': 'MIA', 'selected': false},
				{'title': 'Functional Appliance', 'selected': false},
				{'title': 'Headgear', 'selected': false},
				{'title': 'Reserve headgear', 'selected': false},
				{'title': 'Upper TMJ splint', 'selected': false},
				{'title': 'Upper retainer', 'selected': false},
				{'title': 'Lower retainer', 'selected': false},
				{'title': 'Orthotic', 'selected': false},
				{'title': 'Carriere', 'selected': false},
				{'title': 'Upper 2x4', 'selected': false},
				{'title': 'Lower 2x4', 'selected': false},
				{'title': 'Fan Expanders', 'selected': true},
				{'title': 'TADs', 'selected': false},
				{'title': 'Occulusals', 'selected': false},
				{'title': 'Splint', 'selected': false},
				{'title': 'Upper Schwartz', 'selected': false},
				{'title': 'Lower Schwartz', 'selected': false},
				{'title': 'Upper Sagital', 'selected': false},
				{'title': 'Lower Sagital', 'selected': false},
				{'title': 'Bionator', 'selected': false},
				{'title': 'Frankel ll', 'selected': false},
				{'title': 'Nance Holding Arch', 'selected': false},
			]
		},
		{'title': 'Elastic Wear', 'ddoptions': []},
		{'title': 'Invisalign', 'ddoptions': []},
		{'title': 'Treatment Time Estimate', 'ddoptions': []},
		{'title': 'Retainer Period', 'ddoptions': []},
	];
	
	nonExtractionPlanArrSelected: any[] = [
		{'title': 'Non-Extraction Plan', 'ddoptions': [
			{'title': 'Hyrax', 'duration': '3 wks', 'selected': true},
			{'title': 'OBS/monitor primary exfoliation', 'duration': '1 mo', 'selected': true},
			{'title': 'Maxillary 2x4 prn', 'duration': '2 wks', 'selected': true},
			{'title': 'Maxillary TT prn', 'duration': '1 mo', 'selected': true},
			{'title': 'Band/bond both arches', 'duration': '1 mo', 'selected': true},
			{'title': 'Level & align', 'duration': '3 mo', 'selected': true},
			{'title': 'Details and elastics', 'duration': '3 wks', 'selected': true},
			{'title': 'Ret: Standard Hawley & Tru-Tain', 'duration': '2 wks', 'selected': true},
			{'title': 'Evaluation 3rd molars', 'duration': '2 wks', 'selected': true}
		]},
	];
	
	stepsRotateY: any = 0;
	txPlanRotateY: any = 0;
	goalRotateY: any = 0;
	
	goalText: any = '';
	
	
	@Input() consq_visit: boolean;

  constructor() { }

  ngOnInit() {
	if(this.consq_visit == true){
		this.stepsRotateY = -180;
		this.txPlanRotateY = -180;
		this.goalRotateY = -180;
		
		this.txPlanArr = this.txPlanArrSelected;
		this.nonExtractionPlanArr = this.nonExtractionPlanArrSelected;
		
		this.goalText = "Alleviate crowding\nAlleviate spacing\nCorrect and align midlines\nClass I canines and molars\nAlleviate curve of spee\nImprove incisor position\nMaintain or improve profile\nReduce open bite\nReduce overjet\nCorrect crossbite\nReduce over bite\nRefer patient for general dental care\nSend out for perio evalution";

	}
	
	
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
  
  flipStepsSection() {
	this.stepsRotateY -= 180;
  }
  
  txPlanSectionFlip() {
	this.txPlanRotateY -= 180;
  }
  
  goalSectionFlip() {
	this.goalRotateY -= 180;
  }
  
  
  addGoaltext(event){
	this.goalText = event.target.value;
  }

}
