import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../base/base.component';
import { UserDto } from './Dto/UsertDto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseComponent {

  baseUrl =  this.getBaseUrl();

  constructor(
    private http: HttpClient
  ) { 
    super();
  }


  GetAll(): Observable<any> {
    return this.http.get<Array<UserDto>>(this.baseUrl + '/user');
  }

}
