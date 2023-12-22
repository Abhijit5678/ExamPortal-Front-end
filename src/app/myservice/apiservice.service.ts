import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) {}

  private baseurl:any="http://localhost:8080/user";

  saveUser(data: any) {
    return this.http.post(`${this.baseurl}/saveUser`, data);
  }
  

 

}
