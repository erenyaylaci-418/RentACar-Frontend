import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/car-dto-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
  apiUrl ="https://localhost:44358/api/car/getdetails";
  constructor(private httpClient:HttpClient) { }
  getCarDtos():Observable<CarDtoResponseModel>{
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl)
  }
}
