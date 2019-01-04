import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountComponent } from './operation-pages/account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchboxComponent, SearchboxDD } from './searchbox/searchbox.component';
import { AdminSettings_routing } from './admin-settings.routing';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingpageMainComponent } from './settingpage-main/settingpage-main.component';
import { SettingsOperationComponent } from './settings-operation/settings-operation.component';
import { SettingsClinicComponent } from './settings-clinic/settings-clinic.component';
import { SettingsFinanceComponent } from './settings-finance/settings-finance.component';
import { SettingsClinicDiagnosisComponent } from './settings-clinic-diagnosis/settings-clinic-diagnosis.component';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { ScheduleComponent } from './operation-pages/schedule/schedule.component';
import { ReferralsComponent } from './operation-pages/referrals/referrals.component';
import { CalendarSettingsComponent } from './calendar-settings/calendar-settings.component';
import { UserinfoComponent } from './operation-pages/userinfo/userinfo.component';
import { PostingCodesComponent } from './finance-pages/posting-codes/posting-codes.component';
import { InsuranceComponent } from './finance-pages/insurance/insurance.component';
import { PaymentsComponent } from './finance-pages/payments/payments.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
	AdminSettings_routing,
	PerfectScrollbarModule,
	FlexLayoutModule,
	MatDialogModule,
	MatIconModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  declarations: [AccountComponent, SettingsComponent, SearchboxComponent, SearchboxDD, SettingpageMainComponent, SettingsOperationComponent, SettingsClinicComponent, SettingsFinanceComponent, SettingsClinicDiagnosisComponent, ToggleBtnComponent, ScheduleComponent, ReferralsComponent, CalendarSettingsComponent, UserinfoComponent, PostingCodesComponent, InsuranceComponent, PaymentsComponent],
  entryComponents: [SearchboxDD]
})
export class AdminSettingsModule { }
