import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../base/base.component';
import { PersonDto } from './Dto/PersonDto';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseComponent{

  API_URL = this.getBaseUrl();

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  GetlAll(): Observable<any> {
    return this.http.get<PersonDto>(`${this.API_URL}/Person`);
  }

  GetById(id : number): Observable<PersonDto> {
    return this.http.get<any>(`${this.API_URL}/Person/${id}`);
  }

  Create(personData : any): Observable<any> {
    return this.http.post(`${this.API_URL}/Person`,personData);
  }

  Delete(id : number): Observable<any> {
    return this.http.delete(`${this.API_URL}/Person/${id}`);
  }
  Update(persontData : any): Observable<any> {
    return this.http.put(`${this.API_URL}/Person/${persontData.id}`,persontData);
  }
}
