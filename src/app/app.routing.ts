//Lazyloading ts

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

/*export const routes: Routes = [
	{path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'}
];*/

export const routes: Routes = [
	/*{path: '**', pathMatch: 'full', redirectTo: '/ava/(adminoutlet:admin)'},*/
	{path: '', loadChildren: './accordion/accordion.module#AccordionModule'}
];

export const Approuting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});