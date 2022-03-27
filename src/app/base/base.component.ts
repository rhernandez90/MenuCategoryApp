import { Component, isDevMode, OnInit } from '@angular/core';

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
        return   "http://localhost:8245";
    }
    else {
        
        return "http://taskapp-api.azurewebsites.net"; 
    }
}


}
