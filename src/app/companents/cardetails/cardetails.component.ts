import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardto } from 'src/app/models/cardto';
import { CarImage } from 'src/app/models/carimage';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  constructor(private carDtoService:CarDtoService,private carimageService:CarImageService,private activatedRoute:ActivatedRoute) { }
  carsDtos:Cardto[]=[];
  carsImage:CarImage[] = [];
  days:number;
  carDtoResponseModel:ListResponseModel<Cardto>={
    data:this.carsDtos,
    message:"",
    success:true,
  }
  imageResponseModel:ListResponseModel<CarImage>={
    data:this.carsImage,
    message:"",
    success:true,
  }
  dataLoadedDto =false;
  imageLoaded=false;
  carADto:Cardto;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getACarDto(params["carId"])
        this.getCarImages(params["carId"])
      }
      
    });
  }
  getACarDto(id:number)
  {
    this.carDtoService.getACarDto(id).subscribe(respose => {
      this.carsDtos = respose.data;
      this.dataLoadedDto =true;
      this.carADto=this.carsDtos[1];
    })
  }
  getCarImages(id:number){
    this.carimageService.getCarImages(id).subscribe(response => {
      this.carsImage = response.data;
      this.imageLoaded=true;
    });
  }
  getcarimage(image:CarImage):string{
    if (image=null) {
      return "https://localhost:44358/api/carimage/getbycarhomeid?id=2003";
    }
    else{
      return "https://localhost:44358/api/carimage/getbyid?id="+image.id;
    }
  }

}
