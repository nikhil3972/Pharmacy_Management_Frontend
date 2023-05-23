import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerMedicine } from 'src/app/Model/CustomerMedicine';
import { User } from 'src/app/Model/User';
import { CostService } from '../cost.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient,public costService:CostService) { }

  users: User[] = [];
  totalBill!:number;
  public getCost(){
    return this.http.get("http://localhost:8999/getTotalCost");

  }

public postCost(user:any){
  return this.http.post("http://localhost:8999/insertTotalCost",user,{responseType:'text'as 'json'});
}

public getCustomers(){
    return this.http.get("http://localhost:8999/customer/getAllCustomer");
  }
  public postMethod(body: any){
    return this.http.post("http://localhost:8999/customer/insertCustomer",body,{responseType:'text'as 'json'});
  }
  public deleteData(id:number){

    return this.http.delete("http://localhost:8999/customer/deleteCustomer/"+id);
  }
  // public updateData(user:User){
  //   alert("update");
  //   return this.http.put("localhost:8010/updateOnlyCustomer",user);
  // }
  public putCustomer(body: any){
    return this.http.put("http://localhost:8999/customer/updateCustomer",body,{responseType:'text'as 'json'})
  }
  // public getCustomerById(id:number){
  //   return this.http.get("http://localhost:8010/getCustomerById/"+id);
  // }

  // public getCustomerWithMedicine(){
  //   return this.http.get("http://localhost:8010/getMedicineWithCustomer");
  // }
  // public postCustomerWithMedicine(user: CustomerMedicine){
  //   return this.http.post("http://localhost:8010/insertCustomer",user,{responseType:'text'as 'json'});
  // }
}
function getTotalCost() {
  throw new Error('Function not implemented.');
}

