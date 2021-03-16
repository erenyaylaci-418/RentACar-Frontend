import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }
  
  apiUrl ="https://localhost:44358/api/";

  getCarImages(carid:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimage/getbycarid?id="+carid;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

}
