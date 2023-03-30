import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  public getMedicine(){
    return this.http.get("http://localhost:8010/getAllMedicine");
  }
  public deleteMedicine(id:number){
    return this.http.delete("http://localhost:8010/deleteMedicine/"+id);
  }
}
