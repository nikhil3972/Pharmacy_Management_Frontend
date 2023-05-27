import { Component } from '@angular/core';
import { Seller } from 'src/app/Model/Seller';
import { ProcureService } from 'src/app/Services/Procure/procure.service';
import { ProcureMedicine } from 'src/app/Model/ProcureMedicine';

@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html',
  styleUrls: ['./procure.component.css']
})
export class ProcureComponent {
  manufacturers!:any;
  procuremedicine!:any;
  ProcureMedicines:ProcureMedicine = new ProcureMedicine("","",new Date("Fri Dec 08 2019 "),0);
  constructor(private procureService:ProcureService){}
  ngOnInit(){

    this.displayManufacturers();
    this.displayManufacturers();

  }
  displayManufacturers(){
    this.procuremedicine=this.procureService.getSellers().subscribe(data=>
      this.procuremedicine=data);
      return this.procuremedicine;
  }
  public addManufacturer = async () => {
    let resp = await this.procureService.postMethod(this.ProcureMedicines);
    resp.subscribe((data) => (this.procuremedicine = data));

    this.displayManufacturers();
    // this.displayManufacturers();
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
