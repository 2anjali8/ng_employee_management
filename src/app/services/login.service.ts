import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { AdminModel } from '../Models/admin/admin.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl : string = "https://localhost:44337/Api/Admin/";
  constructor(private http : HttpClient) { }

  adminlogin(loginObj : AdminModel){
    return this.http.post<any>(`${this.baseUrl}Authentication?dummy=1`,loginObj)
  }
}
