export class Sales{
    id! : number
    date! : String
    total_cost! : number
    customername!:string

    constructor(id:number,customername:string,date:String,total_cost:number){
        this.id=id
        this.customername=customername
        this.date=date
        this.total_cost=total_cost
        this.customername=customername
    }
}
