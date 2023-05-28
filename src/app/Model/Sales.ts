export class Sales{
    saleId! : number
    medicineName! : string
    medicineQuantity! : number
    
    price!:number
    date!:Date

    constructor(id:number,medicineName:string,medicineQuantity:number,price:number,date:Date){
        this.saleId=id
        this.medicineName=medicineName
       this.medicineQuantity=medicineQuantity
       this.price=price
        this.date=date
       
    }
}
