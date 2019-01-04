import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PmsComponent } from './pms/pms.component';

export const adminpmtroutes: Routes = [
	{path: '', component: PmsComponent},
	

];

export const AdminPMT_routing: ModuleWithProviders = RouterModule.forChild(adminpmtroutes);