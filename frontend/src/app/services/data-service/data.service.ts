import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from 'src/shared/models/client';
import { Login } from 'src/shared/models/login';
import { Product } from 'src/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private SERVICE_URL: string = environment.urlBouchonFolder;
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  }

  constructor(private http: HttpClient) { }

  GetList() : Observable<any>{
    return this.http.get<any>(this.SERVICE_URL + 'GetList.json').pipe(
      map(data => data.data)
    );
  }

  GetProductFromId(id: number) : Observable<Product>{
    return this.http.get<any>(this.SERVICE_URL + 'GetList.json').pipe(
      map((data) => data.data.filter(e => e.Id == id)[0]),
    );
  }

  GetDetails(id: number) : Observable<any>{
    return this.http.get<any>(this.SERVICE_URL + 'GetDetails' + id  + '.json');
  }

  Login(user: Login) : Observable<any>{
    return this.http.post<any>('api/user/login', this.getFormData(user));
  }

  Register(client: Client) : Observable<any>{
    return this.http.post<any>('api/user/register', this.getFormData(client));
  }

  private getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  } 
}
