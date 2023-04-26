import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcureMedicine } from 'src/app/Model/ProcureMedicine';
import { Seller } from 'src/app/Model/Seller';

@Injectable({
  providedIn: 'root'
})
export class ProcureService {

  constructor(private http:HttpClient) { }
  public getSellers(){
    return this.http.get("http://localhost:8010/getAllManufacturer");
  }
  public postMethod(manufacturer: ProcureMedicine){
    return this.http.post("http://localhost:8010/insertManufacturer",manufacturer,{responseType:'text'as 'json'});
  }
  public deleteData(id:number){

    return this.http.delete("http://localhost:8010/deleteManufacturer/"+id);
  }
  public updateData(manufacturer:ProcureMedicine){
    alert("update");
    return this.http.put("localhost:8010/updateManufacturer",manufacturer);
  }
}
