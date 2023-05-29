import { Component,OnInit } from '@angular/core';
import { ProcureService } from 'src/app/Services/Procure/procure.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Procure } from 'src/app/Model/Procure';


@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html',
  styleUrls: ['./procure.component.css']
})
export class ProcureComponent {

  manufacturerForm!:FormGroup

  submitted=false;

  procureArr : Procure[] = [];

  procure:Procure= new Procure(0,"","","",0,new Date("2023-09-08"),new Date("2023-09-08"),0);

  medicineId!:number;
  medicineName!:string;
  description!:string;
  dosage!:string;
  price!:number;
  manufactureDate!:Date;
  expiryDate!:Date;
  currentStock!:number

  constructor(private procureService:ProcureService, private formBuilder:FormBuilder){}
  ngOnInit(){

    //Validations

    this.manufacturerForm= this.formBuilder.group({
      medicineId:['',Validators.required],
      medicineName:['',Validators.required],
      description:['',Validators.required],
      dosage:['',Validators.required],
      price:['',Validators.required],
      manufactureDate:['',Validators.required],
      expiryDate:['',Validators.required],
      currentStock:['',Validators.required]
    })
    
    this.display();
  }
  display(){
    this.procureService.getMedicine().subscribe(
      (res : any) => {
        this.procureArr = res;
      },
      (err) => {

      }
    );
  }
  deleteMedicine(medicineId : number){
    this.procureService.deleteMedicine(medicineId).subscribe(
      (resp : any) => {
        this.display();
      },
      (err : any) => {
        console.log(err);
      }
    );
    location.reload();
  }

  addMedicine(){

    this.submitted=true;

    
  if (this.procure.medicineId <= 0) {
    alert("Medicine Id cannot be negative or 0");
    return;
  } 
  else if(this.procure.medicineName.trim() === ''){
    alert("Medicine Name cannnot be blank");
    return;
  }
  else if (this.procure.description.trim() ==='') {
    alert("Description cannot be blank");
    return;
  }
  else if (this.procure.dosage.trim() ==='') {
    alert("Dosage cannot be blank");
    return;
  } 
  else if (this.procure.price <= 0) {
    alert("CurrentStock cannot be negative or 0");
    return;
  }
  else if (this.procure.currentStock <= 0) {
    alert("Medicine Id cannot be negative or 0");
    return;
  }
  else if (!this.manufacturerForm.invalid) {
    this.procureService.postMedicine(this.medicineId,
      this.medicineName,
      this.description,
      this.dosage,
      this.price,
      this.manufactureDate,
      this.expiryDate,
      this.currentStock).subscribe(
      (resp : any) => {
        alert("Medicine Added Successfully");
      },
      (err) => {
        console.log(err);
      });
    location.reload();
    } 
    else
      return;

  }

  searchMedicine(medicineName : String){
    this.procureService.getMedicineName(medicineName).subscribe(
      (resp : any) => {
        this.display();
      },
      (err : any) => {
        console.log(err);
      }
    );
    location.reload();
  }
  
}
