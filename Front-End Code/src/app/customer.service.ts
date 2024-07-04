import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASIC_PATH=["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  submitComplaint(complaint: { customerId: number; text: string; }) {
    throw new Error('Method not implemented.');
  }
  getCustomer(customerId: number) {
    throw new Error('Method not implemented.');
  }
  constructor( private http: HttpClient) { }

  CreateCustomer(customer:any): Observable<any>
  {
    return this.http.post(BASIC_PATH+"/cust/add",customer)
  }
  getAllCustomer(): Observable<any>
  {
    return this.http.get(BASIC_PATH+"/cust/all");
  }

  delCustomer(id:any):Observable<any>
  {
    return this.http.delete(BASIC_PATH+"/cust/del/"+id);
  }
  getSingleCustomer(id:any):Observable<any>
  {
    return this.http.get(BASIC_PATH+"/cust/"+id);
  }
  updateSingleCustomer(id:any,customer:any):Observable<any>
  {
    return this.http.put(BASIC_PATH+"/cust/update/"+id,customer);
  }
}
