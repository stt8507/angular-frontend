import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private basedURL = "http://localhost:8080/api/v1/employees";
  constructor(private HttpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.HttpClient.get<Employee[]>(`${this.basedURL}`); 
  }

  createEmployee(employee: Employee) {
    return this.HttpClient.post(`${this.basedURL}`, employee);
  }

  getEmployeesById(id: number): Observable<Employee>{
    return this.HttpClient.get<Employee>(`${this.basedURL}/${id}`); 
  }

  updateEmployee(id: number, employee:Employee): Observable<Object>{
    return this.HttpClient.put(`${this.basedURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.HttpClient.delete(`${this.basedURL}/${id}`);
  }
}
