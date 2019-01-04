import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { AdminComponent } from './admin/admin.component';

export const adminroutes: Routes = [
	/*{path: '', component: AdminComponent},*/
	
	{path: '', redirectTo: 'admin', pathMatch: 'full'},
	{path: 'admin', component: AdminComponent, children: [
		{path: '', redirectTo: 'analytics', pathMatch: 'full'},
		{path: 'analytics', loadChildren: '../admin-analytics/admin-analytics.module#AdminAnalyticsModule', outlet: 'analytics'},
		{path: 'settings', loadChildren: '../admin-settings/admin-settings.module#AdminSettingsModule', outlet: 'settings'},
		{path: 'pmt', loadChildren: '../admin-pmt/admin-pmt.module#AdminPmtModule', outlet: 'pmt'},
	]}

];

export const Admin_routing: ModuleWithProviders = RouterModule.forChild(adminroutes);