import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  
  brandAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.createBrand();
  }

  createBrand()
  {
    this.brandAddForm = this.formBuilder.group(
      {
        brandName:["",Validators.required],
      }
    );
  }


  add(){

  }
}
