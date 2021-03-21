import { Component, OnInit } from '@angular/core';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor() { }
  rentaCaricon = faCar;
  ngOnInit(): void {
    
  }
  
}
