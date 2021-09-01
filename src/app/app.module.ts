import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GpsTrackerComponent } from './gps-tracker/gps-tracker.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    GpsTrackerComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      // get key
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
