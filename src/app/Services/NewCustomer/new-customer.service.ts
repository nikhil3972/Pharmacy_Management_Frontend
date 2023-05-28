import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private http:HttpClient) { }

  public getCustomer(){
    return this.http.get("http://localhost:8020/getAllCustomeres");
  }
 
 public postCustomer(body: any){
    return this.http.post("http://localhost:8020/insertCustomer",body,{responseType:'text'as 'json'});
  }
  public deleteCustomer(id:number){
    return this.http.delete("http://localhost:8020/deleteCustomer/"+id);
  }
  public putCustomer(id: number){
    return this.http.put("http://localhost:8020/updateCustomer/",+id)
  }
 
}
