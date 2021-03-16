import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44358/api/"
  constructor(private httpClient: HttpClient) { }
  getCar(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+ "car/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

}
