import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddServerComponent } from './add-server/add-server.component';
import { DisplayServerComponent } from './display-server/display-server.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComponent,
    DisplayServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
