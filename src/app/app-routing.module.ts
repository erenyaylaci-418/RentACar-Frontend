import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './companents/brand/brand.component';
import { CarComponent } from './companents/car/car.component';
import { CardetailsComponent } from './companents/cardetails/cardetails.component';
import { CarimageComponent } from './companents/carimage/carimage.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/resimler", component:CarimageComponent},
  {path:"cars/cardetailspage/:carId", component:CardetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
