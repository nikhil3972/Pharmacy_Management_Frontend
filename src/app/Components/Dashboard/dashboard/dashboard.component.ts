import { Component } from '@angular/core';
import { Medicine } from 'src/app/Model/Medicine';
import { MedicineService } from 'src/app/Services/Medicine/medicine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  medicine!:any;
  formHeader ="Add Medicine";
  medname ="";
  description="";
  dosage="";
  price!:Number;
  Manufacture_date=new Date();
  expiry_Date=new Date();
  Current_Stock!:number;
  showForm= false;
  id!:Number;

  constructor(private medicineService : MedicineService){}

  ngOnInit(){
    this.medicine = this.medicineService.getMedicine().subscribe(data =>
      this.medicine = data);
      return this.medicine;
  }
  deleteMedicineData(item:  Medicine){
    this.medicineService.deleteMedicine(item.id).subscribe((resp) => {
    });
   this.ngOnInit();
   this.ngOnInit();
  }
  openForm(item:Medicine){
    this.showForm=true;
    if(item){
      this.medname=item.name;
      this.description=item.description,
      this.dosage=item.dosage,
      this.price=item.price,
      this.Manufacture_date=item.manufacture_date,
      this.expiry_Date=item.expiry_date,
      this.Current_Stock=item.current_stock,
      this.id =item.id;
      this.formHeader = "Edit Medicine"
    }else{
      this.formHeader="Add Medicine"
    }
  }

  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.medname="";
      this.description="",
      this.dosage="",
      this.price=0,
      this.Manufacture_date=new Date(0),
      this.expiry_Date=new Date(0),
      this.Current_Stock=0
  }
  saveMedicine(){

    this.showForm =false;

    let  body = {
      name:this.medname,
      description:this.description,
      price:this.price,
      dosage:this.dosage,
      this:this.Manufacture_date,
      // this:this.expiry_Date,
      Current_Stock:this.Current_Stock,
      id:this.id
    }

    if(this.id){
      body['id'] =this.id;
      this.medicineService.putMedicine(body).subscribe(
        (res)=>{
          this.medicine()
        },

      )
    }

    else{
      this.medicineService.postMethod(body).subscribe(
        (res)=>{
          this.medicine()
        },
      )
    }
    this.ngOnInit();
    this.ngOnInit();

  }

}
