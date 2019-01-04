import { Approuting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*import { ScheduleModule } from './schedule/schedule.module';
import { AccordionModule } from './accordion/accordion.module';*/

@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	Approuting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
