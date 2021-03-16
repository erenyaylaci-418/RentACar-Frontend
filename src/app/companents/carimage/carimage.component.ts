import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carsImage:CarImage[]=[];
  carImageResponseModel:ListResponseModel<CarImage>={
    data:this.carsImage,
    message:"",
    success:true,
  }
  dataLoaded = false;
  constructor(private carImageService:CarImageService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarImages(2003);
  }
  getCarImages(id:number){
    this.carImageService.getCarImages(id).subscribe(response => {
      this.carsImage = response.data;
      this.dataLoaded=true;
    });
  }
}
