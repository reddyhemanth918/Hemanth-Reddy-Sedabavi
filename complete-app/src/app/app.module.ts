import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { ReachusComponent } from './pages/reachus/reachus.component';
import { EnqiryFormComponent } from './pages/home/enqiry-form/enqiry-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuoteitPipe } from './pipes/quoteit.pipe';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { AboutBoxComponent } from './pages/about/about-box/about-box.component';
import { CarrersBoxComponent } from './pages/carrers/carrers-box/carrers-box.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    AboutBoxComponent,
    CarrersComponent,
    CarrersBoxComponent,
    ReachusComponent,
    ServiceBoxComponent,
    QuoteitPipe,
    TypefilterPipe,
    EnqiryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
