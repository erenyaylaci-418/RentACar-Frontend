import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brand-response-model';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] =[];
  brandResponseModel: BrandResponseModel = {
    data: this.brands,
    message: '',
    success: true,
  };
  dataLoaded = false;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    console.log('brand çalıştı');
    this.getBrands();
    
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
}
