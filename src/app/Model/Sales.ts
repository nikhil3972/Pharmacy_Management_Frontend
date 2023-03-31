export class Sales{
    id! : number
    date! : String
    total_cost! : number

    constructor(id:number,date:String,total_cost:number){
        this.id=id
        this.date=date
        this.total_cost=total_cost
    }
}