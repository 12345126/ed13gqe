export class GoodClass{
    readonly minQuantity = 1
    readonly maxQuantity = 10
    private quantity:number
    
    private isImported:boolean

    readonly validTypes = ['books', 'food', 'medical', 'other']
    private type:string
    
    readonly nameMinLength = 1
    readonly nameMaxLength = 10
    private name = undefined
    
    readonly minPrice = 1
    readonly maxPrice = 1000
    private price:number

    constructor() {
        this.quantity = this.minQuantity
        this.isImported = false
        this.type = this.validTypes[0]
        this.price = this.minPrice
    }

    get currentQuantity() { return this.quantity }
    get currentIsImported() { return this.isImported }
    get currentType() { return this.type }
    get currentPrice(){ return this.price }
}
