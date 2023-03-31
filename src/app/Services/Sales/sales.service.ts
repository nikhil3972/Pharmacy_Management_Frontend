import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sales } from 'src/app/Model/Sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }

  getSales(){
    return this.http.get("http://localhost:8010/getAllSales");
  }
  public postMethod(user: Sales){
    return this.http.post("http://localhost:8010/insertSales",user,{responseType:'text'as 'json'});
  }
  public deleteData(id:number){
    return this.http.delete("http://localhost:8010/deleteSales/"+id);
  }
  public updateData(user:Sales){
    alert("update");
    return this.http.put("http://localhost:8010/updateSales",user);
  }
}
