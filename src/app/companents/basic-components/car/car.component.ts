import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cardto } from 'src/app/models/cardto';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carsDtos:Cardto[]=[];
  carDtoResponseModel:ListResponseModel<Cardto>={
    data:this.carsDtos,
    message:"",
    success:true,
  }
  dataLoaded = false;
  constructor(private carDtoService:CarDtoService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarDtosByBrand(params["brandId"])
      }
      else{
        if (params["colorId"]) {
          this.getCarDtosByColor(params["colorId"])
        }
        else{
          this.getCarDtos();
        }
        
      }
    })
  }
  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response => {
      this.carsDtos = response.data;
      this.dataLoaded=true;
    })
  }
  getCarDtosByBrand(brandId:number){
    this.carDtoService.getCarDtosByBrand(brandId).subscribe(response => {
      this.carsDtos = response.data;
      this.dataLoaded=true;
    })
  }
  getCarDtosByColor(colorId:number){
    this.carDtoService.getCarDtosByColor(colorId).subscribe(response => {
      this.carsDtos = response.data;
      this.dataLoaded=true;
    })
  }
}
