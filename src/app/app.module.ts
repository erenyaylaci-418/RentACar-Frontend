import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NaviComponent } from './companents/shared-page/navi/navi.component';
import { BrandComponent } from './companents/basic-components/brand/brand.component';
import { ColorComponent } from './companents/basic-components/color/color.component';
import { CarComponent } from './companents/basic-components/car/car.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CardetailsComponent } from './companents/pages/cardetails/cardetails.component';

import { PayPageComponent } from './companents/pages/pay-page/pay-page.component';
import { ColorSearchPipe } from './pipes/color-search.pipe';
import { BrandSearchPipe } from './pipes/brand-search.pipe';
import { HomeComponent } from './companents/pages/home/home.component';
import { LoginPageComponent } from './companents/pages/login-page/login-page.component';
import { RegisterPageComponent } from './companents/pages/register-page/register-page.component';
import { AdminPageComponent } from './companents/pages/admin-page/admin-page.component';
import { ColorAddComponent } from './companents/basic-components/color-add/color-add.component';
import { BrandAddComponent } from './companents/basic-components/brand-add/brand-add.component';
import { CarAddComponent } from './companents/basic-components/car-add/car-add.component';
import { CarImageAddComponent } from './companents/basic-components/car-image-add/car-image-add.component';
import { AddPageComponent } from './companents/pages/add-page/add-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CardetailsComponent,
    HomeComponent,
    PayPageComponent,
    ColorSearchPipe,
    BrandSearchPipe,
    LoginPageComponent,
    RegisterPageComponent,
    AdminPageComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarAddComponent,
    CarImageAddComponent,
    AddPageComponent
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
