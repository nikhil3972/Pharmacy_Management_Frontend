import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Procure } from 'src/app/Model/Procure';

@Injectable({
  providedIn: 'root'
})
export class ProcureService {

  Procure : Procure | undefined;

  constructor(private http:HttpClient) { }

  public getMedicine(){
    return this.http.get("http://localhost:8999/procure/getMedicines");
  }

  public postMedicine(   medicineId:number,
    medicineName:string,
    description:string,
    dosage:string,
    price:number,
    manufactureDate:Date,
    expiryDate:Date,
    currentStock:number){

      this.Procure = new Procure(medicineId, medicineName, description, dosage, price, manufactureDate, expiryDate, currentStock)
    return this.http.post("http://localhost:8999/procure/addMedicine", this.Procure);
  }
  public deleteMedicine(id:number){
    return this.http.delete("http://localhost:8999/procure/delete/"+id);
  }
  public putMedicine(body: any){
    return this.http.put("http://localhost:8999/procure/updateMedicine",body)
  }

  public getMedicineSorted(){
    return this.http.get("http://localhost:8999/getAllMedicineSorted");
  }

  public getMedicineName(name : String){
    return this.http.get("http://localhost:8999/procure/getMedicineName/" + name);
  }
}
