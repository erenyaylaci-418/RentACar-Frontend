import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NaviComponent } from './companents/navi/navi.component';
import { BrandComponent } from './companents/brand/brand.component';
import { ColorComponent } from './companents/color/color.component';
import { CarComponent } from './companents/car/car.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CarimageComponent } from './companents/carimage/carimage.component';
import { CardetailsComponent } from './companents/cardetails/cardetails.component';
import { HomeComponent } from './companents/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarimageComponent,
    CardetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
