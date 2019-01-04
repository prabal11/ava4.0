import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OutreachmainComponent } from './outreachmain/outreachmain.component';
import { Outreachrouting } from './outreach.routing';
import { TreatmentComponent, TodoListDialog } from './treatment/treatment.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ChairComponent } from './chair/chair.component';
import { AcordionddnComponent } from './acordionddn/acordionddn.component';
import { MultileveldrpdnComponent } from './multileveldrpdn/multileveldrpdn.component';
import { TreatmentmeterComponent } from './treatmentmeter/treatmentmeter.component';
import { CardaccordionComponent } from './cardaccordion/cardaccordion.component';
import { StepsdrdnComponent } from './stepsdrdn/stepsdrdn.component';
import { RelationshipcardComponent, RelationTypeDropdown } from './relationshipcard/relationshipcard.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FinanceComponent } from './finance/finance.component';
import { CommunicationComponent } from './communication/communication.component';
import { VerticalMeterComponent } from './vertical-meter/vertical-meter.component';
import { SelectedDDOptionsComponent } from './selected-ddoptions/selected-ddoptions.component';
import { TxplanBackComponent } from './txplan-back/txplan-back.component';
import { NontxplanBackComponent } from './nontxplan-back/nontxplan-back.component';
import { TreatmentNotificationComponent } from './treatment-notification/treatment-notification.component';

import { ClickOutsideDirective } from '../core/ClickElsewhereDirective';
import { XrayScanComponent } from './xray-scan/xray-scan.component';
import { PayscheduleComponent } from './payschedule/payschedule.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

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
	PerfectScrollbarModule,
	TextMaskModule,
	FormsModule,
	MatDatepickerModule,
	MatNativeDateModule
  ],
  
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  
  declarations: [OutreachmainComponent, TreatmentComponent, ChairComponent, AcordionddnComponent, MultileveldrpdnComponent, TreatmentmeterComponent, CardaccordionComponent, TodoListDialog, StepsdrdnComponent, RelationshipcardComponent, RelationTypeDropdown, FinanceComponent, CommunicationComponent, VerticalMeterComponent, SelectedDDOptionsComponent, TxplanBackComponent, NontxplanBackComponent, TreatmentNotificationComponent, ClickOutsideDirective, XrayScanComponent, PayscheduleComponent],
  
  entryComponents: [TodoListDialog, RelationTypeDropdown]
})
export class OutreachModule { }
