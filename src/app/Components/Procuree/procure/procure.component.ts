import { Component } from '@angular/core';
import { Seller } from 'src/app/Model/Seller';
import { ProcureService } from 'src/app/Services/Procure/procure.service';
import { ProcureMedicine } from 'src/app/Model/ProcureMedicine';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html',
  styleUrls: ['./procure.component.css']
})
export class ProcureComponent {

  manufacturerForm!:FormGroup

  submitted=false;

  manufacturers!:any;
  procuremedicine!:any;
  ProcureMedicines:ProcureMedicine = new ProcureMedicine("","",new Date("Fri Dec 08 2019 "),0);
  constructor(private procureService:ProcureService, private formBuilder:FormBuilder){}
  ngOnInit(){

    //Validations

    this.manufacturerForm= this.formBuilder.group({
      manufacturerName:['',Validators.required],
      medicineName:['',Validators.required],
      deliveryDate:['',Validators.required],
      medicineQuantity:['',Validators.required]
    })
    
    this.displayManufacturers();
  }
  displayManufacturers(){
    this.procuremedicine=this.procureService.getSellers().subscribe(data=>
      this.procuremedicine=data);
      return this.procuremedicine;
  }
  public addManufacturer = async () => {
    this.submitted=true;

    
    if(this.ProcureMedicines.quantity === 0){
      alert("Medicine Quantity cannot be 0");
      return;
    }
    else if (!this.manufacturerForm.invalid) {
      let resp = await this.procureService.postMethod(this.ProcureMedicines);
      resp.subscribe((data) => {
        this.procuremedicine = data;});
    } 
    else
      return;
  };
  deleteData(item: Seller) {
    this.procureService.deleteData(item.id).subscribe((resp) => {
      console.log(resp);
    });
    this.displayManufacturers();
    this.displayManufacturers();
  }
  updateManufacturer(user: ProcureMedicine) {
    this.procureService.updateData(user).subscribe((data) => {
      console.log(data);
    });
  }
  
}
