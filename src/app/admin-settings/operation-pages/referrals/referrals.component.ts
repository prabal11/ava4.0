import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css']
})
export class ReferralsComponent implements OnInit {
	
	rotateOnY = 0;
	selectorHeight: any;
	selectorTop: any;
	accordOpen = false;
	
	docListAcrd: any = [{accordOpen: false}, {accordOpen: false}, {accordOpen: false}, {accordOpen: false}, {accordOpen: false}, {accordOpen: false}, {accordOpen: false}, {accordOpen: false}];

  constructor() { }

  ngOnInit() {
  }
  
  flipCard() {
	this.rotateOnY -= 180;
  }
  
  showDetails(evt, indx) {
	
	
	this.docListAcrd.map(item => {
		item.accordOpen = false;
	});
	
	this.docListAcrd[indx].accordOpen = true;
	
	
	setTimeout(() => {
		this.accordOpen = true;
		console.log(evt.target.parentElement.offsetTop);
		this.selectorTop = evt.target.parentElement.offsetTop-1;
		this.selectorHeight = evt.target.parentElement.offsetHeight;
	});
	
	
	
  }

}
