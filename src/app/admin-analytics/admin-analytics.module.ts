import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {AdminAnalytics_routing} from './admin-analytics.routing';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SearchboxComponent, SearchboxDD } from './searchbox/searchbox.component';
import { MatDialogModule } from '@angular/material/dialog';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
	RouterModule,
	FlexLayoutModule,
	MatIconModule,
	PerfectScrollbarModule,
	MatDialogModule,
	AdminAnalytics_routing
  ],
  
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  
  declarations: [AnalyticsComponent, SearchboxComponent, SearchboxDD],
  entryComponents: [SearchboxDD]
})
export class AdminAnalyticsModule { }
