import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardto } from '../models/cardto';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
  apiUrl ="https://localhost:44358/api/";


  constructor(private httpClient:HttpClient) { }
  getCarDtos():Observable<ListResponseModel<Cardto>>{
    let newPath = this.apiUrl+"car/getdetails"
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath)
  }
  getACarDto(carid:number):Observable<ListResponseModel<Cardto>>{
    let newPath = this.apiUrl+"car/getdetailsbycar?id="+carid;
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath)
  }

  getCarDtosByColor(id:number):Observable<ListResponseModel<Cardto>>{
    let newPath = this.apiUrl+"car/getdetailsbycolor?id="+id;
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath)
  }
  getCarDtosByBrand(id:number):Observable<ListResponseModel<Cardto>>{
    let newPath = this.apiUrl+"car/getdetailsbybrand?id="+id
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath)
  }
  
}
