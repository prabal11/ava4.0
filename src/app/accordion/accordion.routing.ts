//Lazyloading ts

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainComponent } from './main/main.component';

export const pageroutes: Routes = [
	{path: '', redirectTo: 'ava', pathMatch: 'full'},
	{path: 'ava', component: MainComponent, children: [
		{path: '', redirectTo: 'admin', pathMatch: 'full'},
		{path: 'admin', loadChildren: '../admin/admin.module#AdminModule', outlet: 'adminoutlet'},
		{path: 'schedule', loadChildren: '../schedule/schedule.module#ScheduleModule', outlet: 'scheduleoutlet'},
		{path: 'outreach', loadChildren: '../outreach/outreach.module#OutreachModule', outlet: 'outreachoutlet'},
		{path: 'outreach', loadChildren: '../outreach/outreach.module#OutreachModule', outlet: 'outreachoutletx'},
		
		
		
		/*{path: '**', pathMatch: 'full', redirectTo: 'admin'}*/
	]},
];

export const Main_routing: ModuleWithProviders = RouterModule.forChild(pageroutes);