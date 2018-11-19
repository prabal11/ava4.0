import { Component, OnInit, Inject, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
	
	selectedLocation: any;
	activeLocation: any = 2;
	locationArr:any[] = ['Lehi Office', 'Provo Office', 'Salt Lake City Office'];
	
	
	
  constructor(public locationdialog: MatDialog) { 
	this.selectedLocation = this.locationArr[this.activeLocation];
  }

  ngOnInit() {
  }
  
  onShowDialog(evt: MouseEvent): void {
		const target = new ElementRef(evt.currentTarget);
		let dialog_config: any = {data: { trigger: target, locationArr: this.locationArr, active: this.activeLocation  }, backdropClass: 'cdk-overlay-transparent-backdrop', panelClass: 'panelClass'};

		const dialogRef = this.locationdialog.open(LocationDialog, dialog_config);
		
		dialogRef.afterClosed().subscribe( _res => {
			if(_res != undefined){
				this.activeLocation = _res.active;
				this.selectedLocation = this.locationArr[this.activeLocation];
			}
		});
	}

}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class LocationDialog implements OnInit {
  private readonly _matDialogRef: MatDialogRef<LocationDialog>;
  private readonly triggerElementRef: ElementRef;
  
  locationArr: any[] = [];
  activeLocation: any;
      
  constructor(_matDialogRef: MatDialogRef<LocationDialog>,
              @Inject(MAT_DIALOG_DATA) data: { trigger: ElementRef, locationArr: any, active: any }) {
    this._matDialogRef = _matDialogRef;
    this.triggerElementRef = data.trigger;
	this.locationArr = data.locationArr;
	this.activeLocation = data.active;
	
  }

  ngOnInit() {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
		
	matDialogConfig.position = { left: `${rect.left - (150 - rect.width)/2}px`, top: `${rect.bottom + 5}px` };
    
    matDialogConfig.width = '150px';
    matDialogConfig.height = '120px';
	
    this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this._matDialogRef.updatePosition(matDialogConfig.position);
  }
  cancel(): void {
    this._matDialogRef.close(null);
  }
  
  selectLocation(_item){
	
	this._matDialogRef.close({'active': _item});
  }
  
  
}
