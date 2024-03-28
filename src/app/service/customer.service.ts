import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL=["http://localhost:9090/"];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: any):Observable<any>{
    return this.http.post(BASE_URL+"api/customer", customer);
  }

  getAllCustomer(): Observable<any>{
    return this.http.get(BASE_URL + "api/customers");
  }

  getCustomerById(id: number): Observable<any>{
    return this.http.get(BASE_URL + "api/customer/" + id);
  }

  updateCustomer(id: number, customer: any): Observable<any>{
    return this.http.put(BASE_URL + "api/customer/" + id, customer); 
  }

  deleteCustomer(id: number): Observable<any>{
    return this.http.delete(BASE_URL + "api/customer/" + id  ); 
  }
}
