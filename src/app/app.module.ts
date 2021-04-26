import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  exports: [CarouselComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
