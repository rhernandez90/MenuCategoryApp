import { Component, isDevMode, OnInit } from '@angular/core';
import  appConfig from "../../assets/config.json"
@Component({
  selector: 'ngx-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  getBaseUrl(): string {

    if (isDevMode()) {
        return   appConfig.localBaseUrl;
    }
    else {
        return appConfig.productionBaseUrl; 
    }
}


}
