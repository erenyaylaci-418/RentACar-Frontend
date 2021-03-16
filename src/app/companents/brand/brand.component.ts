import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] =[];
  brandResponseModel: ListResponseModel<Brand> = {
    data: this.brands,
    message: '',
    success: true,
  };
  dataLoaded = false;
  currentBrand:Brand;
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
  setCurrentBrand(brand:Brand)
  {
    this.currentBrand = brand;
  }
  getCurrentBrandClass(brand:Brand)
  {
    if (brand == this.currentBrand) {
      //console.log("eşit");
      return 'list-group-item list-group-item-action active';
    }
    else
    {
      //console.log("eşit değil");
      return 'list-group-item list-group-item-action';
    }
  }
}
