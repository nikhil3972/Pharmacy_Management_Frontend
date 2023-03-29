import { Component } from '@angular/core';
import { MedicineService } from 'src/app/Services/Medicine/medicine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  medicine!:any;

  constructor(private medicineService : MedicineService){}

  ngOnInit(){

  }

  display(){
    this.medicine = this.medicineService.getMedicine().subscribe(data => 
      this.medicine = data);
      return this.medicine;
  }

}
