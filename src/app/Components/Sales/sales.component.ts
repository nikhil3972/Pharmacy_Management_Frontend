import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/Model/Sales';
import { SalesService } from 'src/app/Services/Sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
  sales!:any

  sale:Sales =new Sales(0,"","",0);
  constructor(private service:SalesService){}



  ngOnInit() {
  }
  displaySales(){
    this.sales=this.service.getSales().subscribe(data=>
      this.sales=data);
      return this.sales;
  }
  deleteRecord(id:number){
    this.service.deleteData(id).subscribe(
      (resp)=>{
        console.log(resp);
      }
    )
    this.displaySales();
  }

  addSales(){
    let resp = this.service.postMethod(this.sale);
    resp.subscribe((data) => (this.sales = data));

    this.displaySales();
    this.displaySales();
  }

  updateSales(user: Sales) {
    this.service.updateData(user).subscribe((data) => {
      console.log(data);
    });
  }
}
