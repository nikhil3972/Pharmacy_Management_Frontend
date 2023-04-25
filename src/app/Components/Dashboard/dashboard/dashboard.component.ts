import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medicine } from 'src/app/Model/Medicine';
import { MedicineService } from 'src/app/Services/Medicine/medicine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  medicine!:any;
  displayedColumns: string[] = ['id', 'name', 'desc', 'dosage','price','manufactureDate','expiryDate','currentStock','Action'];
  dataSource :any;
  formHeader ="Add Medicine";
  id!:number;
    medicineName!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufactureDate!:Date;
    expiryDate!:Date;
    currentStock!:number
  showForm= false;

  @ViewChild(MatSort) sort!:MatSort;


  constructor(private medicineService : MedicineService){}

  ngOnInit(){
    this.medicineService.getMedicine().subscribe(data =>
      this.medicine = data);

      this.dataSource=new MatTableDataSource<Medicine>(this.medicine);
      this.dataSource.sort=this.sort;
      // return this.medicine;
  }
  deleteMedicineData(item:  Medicine){
    this.medicineService.deleteMedicine(item.id).subscribe((resp) => {
    });
   this.ngOnInit();
   this.ngOnInit();
  }
  openaddForm(){
    this.showForm=true;
    this.clearForm();
    this.formHeader="Add Medicine";
  }
  openForm(item:Medicine){
    this.showForm=true;
      this.medicineName=item.medicineName;
      this.description=item.description,
      this.dosage=item.dosage,
      this.price=item.price,
      this.manufactureDate=item.manufactureDate,
      this.expiryDate=item.expiryDate,
      this.currentStock=item.currentStock,
      this.id =item.id;
      this.formHeader = "Edit Medicine"
  }

  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.medicineName="";
      this.description="",
      this.dosage="",
      this.price=0,
      this.manufactureDate=new Date(0),
      this.expiryDate=new Date(0),
      this.currentStock=0
  }
  saveMedicine(){
    this.showForm =false;
    let  body = {
      medicineName:this.medicineName,
      description:this.description,
      price:this.price,
      dosage:this.dosage,
      manufactureDate:this.manufactureDate,
      expiryDate:this.expiryDate,
      currentStock:this.currentStock,
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
