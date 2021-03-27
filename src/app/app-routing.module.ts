import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './companents/basic-components/brand/brand.component';
import { CarComponent } from './companents/basic-components/car/car.component';
import { AddPageComponent } from './companents/pages/add-page/add-page.component';
import { CardetailsComponent } from './companents/pages/cardetails/cardetails.component';
import { PayPageComponent } from './companents/pages/pay-page/pay-page.component';



const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/cardetailspage/:carId", component:CardetailsComponent},
  {path:"pay/:carId/:days", component:PayPageComponent},
  {path:"admin/add/", component:AddPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
