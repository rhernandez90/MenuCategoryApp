import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../base/base.component';
import { MenuCategoryDto } from './Dto/MenuCategoryDto';
import { IMenuCategoryList } from './Dto/MenuCategoryListDto';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MenuCategoryService extends BaseComponent {

  baseUrl =  this.getBaseUrl();

  constructor(
    private http: HttpClient
  ) { 
    super();
  }


  GetTree(): Observable<Array<any>> {
    return this.http.get<Array<IMenuCategoryList>>(this.baseUrl + '/menucategories/menuthree');
  }

  GetAll(): Observable<any> {
    return this.http.get<Array<IMenuCategoryList>>(this.baseUrl + '/menucategories');
  }

  Delete(id : number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.baseUrl}/menucategories/${id}`);
  }

  Create(menuCategory : MenuCategoryDto) : Observable<any> {
    return this.http.post(this.baseUrl + '/menucategories', menuCategory , httpOptions);
  }
  
}
