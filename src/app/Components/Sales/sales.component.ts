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

  constructor(private service:SalesService){}
   


  ngOnInit() {
    this.sales= this.service.getSales().subscribe(data=> this.sales=data);
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


  

}
