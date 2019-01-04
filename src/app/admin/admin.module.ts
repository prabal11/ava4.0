import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './admin/admin.component';

import { Admin_routing } from './admin.routing';
import { OwnerComponent } from './owner/owner.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SearchboxComponent, SearchboxDD } from './searchbox/searchbox.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SettingsComponent } from './settings/settings.component';
import { PmsComponent } from './pms/pms.component';

import { MatDialogModule } from '@angular/material/dialog';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
	RouterModule,
	Admin_routing,
	FlexLayoutModule,
	MatIconModule,
	MatDialogModule,
	PerfectScrollbarModule,
  ],
  
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  
  declarations: [AdminComponent, OwnerComponent, AnalyticsComponent, SearchboxComponent, SettingsComponent, PmsComponent, SearchboxDD],
  entryComponents: [SearchboxDD]
  
})
export class AdminModule { }
