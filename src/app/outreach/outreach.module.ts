import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OutreachmainComponent } from './outreachmain/outreachmain.component';
import { Outreachrouting } from './outreach.routing';
import { TreatmentComponent } from './treatment/treatment.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ChairComponent } from './chair/chair.component';
import { AcordionddnComponent } from './acordionddn/acordionddn.component';
import { MultileveldrpdnComponent } from './multileveldrpdn/multileveldrpdn.component';
import { TreatmentmeterComponent } from './treatmentmeter/treatmentmeter.component';
import { CardaccordionComponent } from './cardaccordion/cardaccordion.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false
};


@NgModule({
  imports: [
    CommonModule,
	FlexLayoutModule,
	MatIconModule,
	MatDialogModule,
	MatButtonModule,
	MatAutocompleteModule,
	Outreachrouting,
	PerfectScrollbarModule
  ],
  
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  
  declarations: [OutreachmainComponent, TreatmentComponent, ChairComponent, AcordionddnComponent, MultileveldrpdnComponent, TreatmentmeterComponent, CardaccordionComponent]
})
export class OutreachModule { }
