import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlotlyComponentComponent } from './plotly-component/plotly-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotlyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
