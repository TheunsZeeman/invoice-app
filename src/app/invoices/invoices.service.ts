import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoices, Items } from './invoices';
@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Invoices[]>('http://localhost:3000/invoices');
  }
  getItems() {
    return this.http.get<Invoices[]>('http://localhost:3000/items');
  }
  create(payload: Invoices) {
    return this.http.post<Invoices>('http://localhost:3000/invoices', payload);
  }
  createItem(payload: Items) {
    return this.http.post<Invoices>('http://localhost:3000/items', payload);
  }
  getById(id: number) {
    return this.http.get<Invoices>(`http://localhost:3000/invoices/${id}`);
   }
   getItemsById(id: number) {
    return this.http.get<Items>(`http://localhost:3000/items/${id}`);
   }
    
   update(payload:Invoices){
    return this.http.put(`http://localhost:3000/invoices/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Invoices>(`http://localhost:3000/invoices/${id}`);
 }
 deleteItem(id:number){
  return this.http.delete<Items>(`http://localhost:3000/items/${id}`);
}
}
