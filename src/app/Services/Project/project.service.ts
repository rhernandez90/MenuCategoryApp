import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../base/base.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseComponent {

  API_URL = this.getBaseUrl();

  constructor(
    private http: HttpClient
  ) { 
    super()
  }


  GetlAll(): Observable<any> {
    return this.http.get(`${this.API_URL}/Project`);
  }

  GetById(id : number): Observable<any> {
    return this.http.get(`${this.API_URL}/Project/${id}`);
  }

  GetAllTasksByStatus(id : number): Observable<any> {
    return this.http.get(`${this.API_URL}/Project/${id}/all-tasks`);
  }

  GetTasksByStatus(id : number, status): Observable<any> {
    return this.http.get(`${this.API_URL}/Project/${id}/Tasks?status=${status}`);
  }

  Create(porjectData : any): Observable<any> {
    return this.http.post(`${this.API_URL}/Project`,porjectData);
  }

  Delete(id : number): Observable<any> {
    return this.http.delete(`${this.API_URL}/Project/${id}`);
  }
  Update(porjectData : any): Observable<any> {
    return this.http.put(`${this.API_URL}/Project/${porjectData.id}`,porjectData);
  }


}
