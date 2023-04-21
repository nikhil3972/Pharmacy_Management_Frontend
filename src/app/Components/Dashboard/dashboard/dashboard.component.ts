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
  id!:number;
    name!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufacture_date!:Date;
    expiry_date!:Date;
    current_stock!:number
  showForm= false;


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
  openaddForm(){
    this.showForm=true;
  }
  openForm(item:Medicine){
    this.showForm=true;
      this.name=item.name;
      this.description=item.description,
      this.dosage=item.dosage,
      this.price=item.price,
      this.manufacture_date=item.manufacture_date,
      this.expiry_date=item.expiry_date,
      this.current_stock=item.current_stock,
      this.id =item.id;
      this.formHeader = "Edit Medicine"
  }

  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.name="";
      this.description="",
      this.dosage="",
      this.price=0,
      this.manufacture_date=new Date(0),
      this.expiry_date=new Date(0),
      this.current_stock=100
  }
  saveMedicine(){
    this.showForm =false;
    let  body = {
      name:this.name,
      description:this.description,
      price:this.price,
      dosage:this.dosage,
      manufacture_date:this.manufacture_date,
      expiry_date:this.expiry_date,
      current_stock:this.current_stock,
      id:this.id
    }
    if(this.id){
      body['id'] =this.id;
      this.medicineService.putMedicine(body).subscribe(
        (res)=>{
          this.medicine()
        },
      )
    }else{
      this.medicineService.postMedicine(body).subscribe(
        (res)=>{
          this.medicine()
        },
      )
    }
    this.ngOnInit();
    this.ngOnInit();
    this.ngOnInit();
   this.ngOnInit();

  }

}
