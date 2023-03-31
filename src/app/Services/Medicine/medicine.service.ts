import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from 'src/app/Model/Medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  public getMedicine(){
    return this.http.get("http://localhost:8010/getAllMedicine");
  }
  public postMethod(user: Medicine){
    return this.http.post("http://localhost:8010/insertMedicine",user,{responseType:'text'as 'json'});
  }
  public deleteMedicine(id:number){
    return this.http.delete("http://localhost:8010/deleteMedicine/"+id);
  }
}
