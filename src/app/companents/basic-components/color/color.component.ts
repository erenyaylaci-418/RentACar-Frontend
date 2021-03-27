import { Component, OnInit } from '@angular/core';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  coloricon = faFillDrip;
  colors:Color[]=[];
  filterText="";
  colorResponseModule:ListResponseModel<Color>={
    data : this.colors,
    message:"",
    success:true
  };
  
  dataLoaded =false;
  currentColor:Color;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
    this.getCurrentColorClass(this.currentColor);
  }
  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentColor(color:Color)
  {
    this.currentColor = color;
  }
  getCurrentColorClass(color:Color)
  {
    if (color == this.currentColor) {
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
