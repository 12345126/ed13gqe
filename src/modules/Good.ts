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

    private isInRage(value:number, minValue:number, maxValue:number):boolean {
        const isValidValue = value >= minValue && value <= maxValue
        return isValidValue 
    }

    set currentQuantity(newQuantity:number) {
        const isValidRangeQuantity = this.isInRage(newQuantity, this.minQuantity, this.maxQuantity)
        if (!isValidRangeQuantity) {
            throw new RangeError()
        }
        this.quantity = newQuantity
    }

    set currentIsImported(newValue:boolean) {
        this.isImported = newValue
    }

    set currentType(newType: string) {
        const isValidType = (newType in this.validTypes)
        if (!isValidType){
            throw new TypeError()
        }
        this.type = newType
    }

    set currentPrice(newPrice:number) {
        const isValidRange = this.isInRage(newPrice, this.minPrice, this.maxPrice)
        if (!isValidRange){
            throw new RangeError()
        }
        this.price = newPrice
    }

    get currentQuantity() { return this.quantity }
    get currentIsImported() { return this.isImported }
    get currentType() { return this.type }
    get currentPrice(){ return this.price }
}
