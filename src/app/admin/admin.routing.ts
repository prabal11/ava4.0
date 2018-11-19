import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AdminComponent } from './admin/admin.component';

export const adminroutes: Routes = [
	{path: '', component: AdminComponent},
	{path: 'admin', component: AdminComponent}

];

export const Admin_routing: ModuleWithProviders = RouterModule.forChild(adminroutes);