import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioSubjectComponent } from './formulario-subject/formulario-subject.component';
import { GridSubjectComponent } from './grid-subject/grid-subject.component';
import {HttpClientModule} from '@angular/common/http';
import { SmartSubjectComponent } from './smart-subject/smart-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioSubjectComponent,
    GridSubjectComponent,
    SmartSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
