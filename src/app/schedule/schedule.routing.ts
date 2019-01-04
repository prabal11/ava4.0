//Lazyloading ts

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SchedularComponent } from './schedular/schedular.component';

export const routes: Routes = [
	{path: '', component: SchedularComponent},
	/*{path: 'schedule', component: SchedularComponent}*/
];

export const Schedulerouting: ModuleWithProviders = RouterModule.forChild(routes);