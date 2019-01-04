import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SettingsComponent } from './settings/settings.component';
import { SettingsOperationComponent } from './settings-operation/settings-operation.component';

import { AccountComponent } from './operation-pages/account/account.component';
import { ReferralsComponent } from './operation-pages/referrals/referrals.component';
import { ScheduleComponent } from './operation-pages/schedule/schedule.component';
import { UserinfoComponent } from './operation-pages/userinfo/userinfo.component';

import { SettingsClinicComponent } from './settings-clinic/settings-clinic.component';

import { SettingsFinanceComponent } from './settings-finance/settings-finance.component';

import { InsuranceComponent } from './finance-pages/insurance/insurance.component';
import { PaymentsComponent } from './finance-pages/payments/payments.component';
import { PostingCodesComponent } from './finance-pages/posting-codes/posting-codes.component';


export const adminsettingsroutes: Routes = [
	{path: '', redirectTo: 'settings', pathMatch: 'full'},
	{path: 'settings', component: SettingsComponent, children: [
		
		{path: 'clinic', component: SettingsClinicComponent},
		{path: 'operations', component: SettingsOperationComponent, children: [
			{path: 'account', component: AccountComponent},
			{path: 'schedule', component: ScheduleComponent},
			{path: 'referrals', component: ReferralsComponent},
			{path: 'users', component: UserinfoComponent},
		]},
		{path: 'finances', component: SettingsFinanceComponent, children: [
			{path: 'payments', component: PaymentsComponent},
			{path: 'postingcodes', component: PostingCodesComponent},
			{path: 'insurance', component: InsuranceComponent},
		]},
		
	]},
	

];

export const AdminSettings_routing: ModuleWithProviders = RouterModule.forChild(adminsettingsroutes);