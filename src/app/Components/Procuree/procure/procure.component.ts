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
  ProcureMedicines:ProcureMedicine = new ProcureMedicine(1,"","",2,"");
  Manufacturer:Seller=new Seller(50,"",0);
  constructor(private procureService:ProcureService){}
  ngOnInit(){



  }
  displayManufacturers(){
    this.manufacturers=this.procureService.getSellers().subscribe(data=>
      this.manufacturers=data);
      return this.manufacturers;
  }
  public addManufacturer = async () => {
    let resp = await this.procureService.postMethod(this.Manufacturer);
    resp.subscribe((data) => (this.manufacturers = data));

    this.displayManufacturers();
    this.displayManufacturers();
  };
  deleteData(item: Seller) {
    this.procureService.deleteData(item.id).subscribe((resp) => {
      console.log(resp);
    });
    this.displayManufacturers();
    this.displayManufacturers();
  }
  updateManufacturer(user: Seller) {
    this.procureService.updateData(user).subscribe((data) => {
      console.log(data);
    });
  }
}
