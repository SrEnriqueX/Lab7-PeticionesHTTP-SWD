import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPostService {
  private baseUrl = "https://projectapi.gerasim.in/api/Complaint"
  constructor( private http:HttpClient) { 

  }
  getDepartamento(): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetParentDepartment`);
  }
  agregarDepartamento(departamento: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/AddNewDepartment`, departamento);
  }
}
