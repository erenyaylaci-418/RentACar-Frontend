import { Component, OnInit } from '@angular/core';
import { CarDtoResponseModel } from 'src/app/models/car-dto-response-model';
import { Cardto } from 'src/app/models/cardto';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carsDtos:Cardto[]=[];
  carDtoResponseModel:CarDtoResponseModel={
    data:this.carsDtos,
    message:"",
    success:true,
  }
  dataLoaded = false;
  constructor(private carDtoService:CarDtoService) { }

  ngOnInit(): void {
    this.getCarDtos();
  }
  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response => {
      this.carsDtos = response.data;
      this.dataLoaded=true;
    })
  }
}
