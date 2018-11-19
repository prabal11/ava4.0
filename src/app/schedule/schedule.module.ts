import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SchedularComponent, CalenderBox } from './schedular/schedular.component';

import { Schedulerouting } from './schedule.routing';
import { DropdownlistComponent, DDListExpansion } from './dropdownlist/dropdownlist.component';
import { ChairComponent } from './chair/chair.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PatientblockComponent, PatientBox } from './patientblock/patientblock.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
/*import { NoopAnimationsModule } from '@angular/platform-browser/animations';*/
import { CalendarComponent } from './calendar/calendar.component';
import { ListboxComponent, PatientCard } from './listbox/listbox.component';
import { LocationComponent, LocationDialog } from './location/location.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { OndeckComponent } from './ondeck/ondeck.component';

import { DateSuffix } from '../pipe/datesuffix.pipe';

import {MatSelectModule} from '@angular/material/select';
import { ViewselectorComponent, ListPopUp } from './viewselector/viewselector.component';

import {MatTableModule} from '@angular/material/table';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false
};

@NgModule({
  imports: [
    CommonModule,
	FlexLayoutModule,
	MatAutocompleteModule,
	MatIconModule,
	MatInputModule,
	MatFormFieldModule,
	MatDialogModule,
	Schedulerouting,
	/*NoopAnimationsModule,*/
	MatDatepickerModule,
	MatNativeDateModule,
	MatButtonModule,
	PerfectScrollbarModule,
	MatSelectModule,
	FormsModule,
	MatTableModule
  ],
  declarations: [SchedularComponent, DropdownlistComponent, ChairComponent, TimelineComponent, PatientblockComponent, DDListExpansion, CalenderBox, CalendarComponent, PatientBox, ListboxComponent, LocationComponent, LocationDialog, OndeckComponent, DateSuffix, ViewselectorComponent, ListPopUp, PatientCard],
  
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  
  entryComponents: [DDListExpansion, CalenderBox, PatientBox, LocationDialog, ListPopUp, PatientCard]
})
export class ScheduleModule { }
