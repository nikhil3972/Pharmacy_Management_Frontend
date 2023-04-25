export class Sales{
    id! : number
    date! : String
    totalCost! : number
    customerName!:string

    constructor(id:number,customername:string,date:String,total_cost:number){
        this.id=id
        this.customerName=customername
        this.date=date
        this.totalCost=total_cost
        this.customerName=customername
    }
}
