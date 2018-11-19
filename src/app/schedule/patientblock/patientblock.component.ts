import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';

import { Subscription } from 'rxjs';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-patientblock',
  templateUrl: './patientblock.component.html',
  styleUrls: ['./patientblock.component.css']
})
export class PatientblockComponent implements OnInit {
	
	@Input() public patientdata;
	@Input() public block_space: any;
	@Input() public slot_space: any;
	
	posLeft: any;
	blockWd: any;
	appntType: any;
	
	duration_min: any;
	timer_view: any;
	subscription: Subscription;
	
  constructor(public patientDialog: MatDialog, private messageService: MessageService) {
	
	this.subscription = this.messageService.getMessage().subscribe(message => {
		if(message.event == 'createblock'){
			this.block_space = Number(message.data.block_space);
			this.slot_space = Number(message.data.slot_space);
			this.timer_view = message.data.timer_view;
			this.createBlock();
		}
	});
	
  }

  ngOnInit() {
	this.createBlock();
  }
  
  createBlock(){
	let tempStart = 7*this.slot_space;
	
	let startTime = this.patientdata.stratTime;
	let startTime_hr = startTime.split(':')[0];
	let startTime_min = startTime.split(':')[1];
	
	let endTime = this.patientdata.endTime;
	let endTime_hr = endTime.split(':')[0];
	let endTime_min = endTime.split(':')[1];
	
	let startTime_in_hr = Number(startTime_hr) + (startTime_min/60);
	let endTime_in_hr = Number(endTime_hr) + (endTime_min/60);
	
	this.duration_min = Math.round(Math.abs(startTime_in_hr - endTime_in_hr)*60);
		
	this.blockWd = Math.abs(startTime_in_hr - endTime_in_hr)*this.slot_space;
	this.posLeft = ((startTime_in_hr*this.slot_space) - tempStart + this.block_space);
		
	if(this.patientdata.appntType == 'exam'){
		this.appntType = '#FD7474';
	} else if(this.patientdata.appntType == 'start'){
		this.appntType = '#74B3FD';
	} else if(this.patientdata.appntType == 'appl'){
		this.appntType = '#F6CC61';
	} else if(this.patientdata.appntType == 'adj'){
		this.appntType = '#8CF1E4';
	} else if(this.patientdata.appntType == 'dband'){
		this.appntType = '#B48CF6';
	} else if(this.patientdata.appntType == 'record'){
		this.appntType = '#FCFF7C';
	}
  }
  
  
  openPatientBlock(){
	//console.log('Hello world!');
	
	const dialogRef = this.patientDialog.open(PatientBox, {
		  width: '400px',
		  data: {patientdata: this.patientdata}
		});
  }

}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class PatientBox implements OnInit {
  
  patientdata: any;
  appntType: any;
  checkin: boolean;
  
  constructor(public _matDialogRef: MatDialogRef<PatientBox>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.checkin = true;
	
  }

  ngOnInit() {
    	
	this.patientdata = this.data.patientdata;
	
	if(this.patientdata.appntType == 'exam'){
		this.appntType = '#FD7474';
	} else if(this.patientdata.appntType == 'start'){
		this.appntType = '#74B3FD';
	} else if(this.patientdata.appntType == 'appl'){
		this.appntType = '#F6CC61';
	} else if(this.patientdata.appntType == 'adj'){
		this.appntType = '#8CF1E4';
	} else if(this.patientdata.appntType == 'dband'){
		this.appntType = '#B48CF6';
	} else if(this.patientdata.appntType == 'record'){
		this.appntType = '#FCFF7C';
	}
	
  }
  
  changeCheckin(){
	if(this.checkin == true){
		this.checkin = false;
	} else {
		this.checkin = true;
	}
  }
  
  cancel(): void {
    this._matDialogRef.close(null);
  }
  
  
}
