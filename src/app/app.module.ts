import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { PayPageComponent } from './companents/pay-page/pay-page.component';
import { ColorSearchPipe } from './pipes/color-search.pipe';
import { BrandSearchPipe } from './pipes/brand-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarimageComponent,
    CardetailsComponent,
    HomeComponent,
    PayPageComponent,
    ColorSearchPipe,
    BrandSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass:"toast-bottom-right"
      }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
