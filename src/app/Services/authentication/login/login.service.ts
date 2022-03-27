import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../../base/base.component';
import { RegisterUserDto } from '../Dto/RegisterUserDto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseComponent {

  baseUrl =  this.getBaseUrl();

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  
  login(userName: string, Password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/authenticate', {
      userName,
      Password
    }, httpOptions);
  }

  register(registerUserDto : RegisterUserDto): Observable<any> {

    return this.http.post(this.baseUrl + '/register', registerUserDto , httpOptions);
  
  }

}
