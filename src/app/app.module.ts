import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCardComponent } from './first-card/first-card.component';
import { SecondCardComponent } from './second-card/second-card.component';
import { ThirdCardComponent } from './third-card/third-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCardComponent,
    SecondCardComponent,
    ThirdCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
