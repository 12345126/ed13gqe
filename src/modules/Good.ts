export class GoodClass{
    static readonly minQuantity = 1 // you can change this value
    static readonly maxQuantity = 10 // you can change this value
    private quantity:number
    
    private isImported:boolean

    static readonly validTypes = ['books', 'food', 'medical', 'other'] // you can change this value
    readonly taxFreeTypes = ['books', 'food', 'medical'] // you can change this value
    private type:string
    
    static readonly nameMinLength = 1 // you can change this value
    static readonly nameMaxLength = 10 // you can change this value
    private name:string
    
    static readonly minPrice = 0.5 // you can change this value
    static readonly maxPrice = 1000 // you can change this value
    private price:number

    constructor() {
        this.quantity = GoodClass.minQuantity
        this.isImported = false
        this.type = GoodClass.validTypes[0]
        this.name = ''
        this.price = GoodClass.minPrice
    }

    private isInRage(value:number, minValue:number, maxValue:number):boolean {
        const isValidValue = value >= minValue && value <= maxValue
        return isValidValue 
    }

    set currentQuantity(newQuantity:number) {
        const isValidRangeQuantity = this.isInRage(newQuantity, GoodClass.minQuantity, GoodClass.maxQuantity)
        if (!isValidRangeQuantity) {
            throw new RangeError('current quantity out of range')
        }
        this.quantity = newQuantity
    }

    set currentIsImported(newValue:boolean) {
        this.isImported = newValue
    }

    set currentType(newType: string) {
        const isValidType = GoodClass.validTypes.includes(newType)
        if (!isValidType){
            throw new TypeError('current type is invalid')
        }
        this.type = newType
    }

    set currentPrice(newPrice:number) {
        const isValidRange = this.isInRage(newPrice, GoodClass.minPrice, GoodClass.maxPrice)
        if (!isValidRange){
            throw new RangeError(`current price must be in range of [${GoodClass.minPrice},${GoodClass.maxPrice}]`)
        }
        this.price = newPrice
    }

    set currentName(newName: string) {
        const isValidRange = this.isInRage(newName.length, GoodClass.nameMinLength,GoodClass.nameMaxLength)
        if (!isValidRange){
            throw new RangeError(`current name length must be in range of [${GoodClass.nameMinLength},${GoodClass.nameMaxLength}]`)
        }
        this.name = newName
    }

    get taxRatio(): number{
        let ratio = 0
        if (this.isImported) {
            ratio += 5
        }
        const isTaxFreeType = (this.taxFreeTypes.includes(this.type)) 
        if (!isTaxFreeType) {
            ratio += 10
        }
        return ratio
    }

    get priceAfterTex(): string {
        const ratio = (100 + this.taxRatio) / 100
        let result = (this.quantity * this.price * ratio).toFixed(2)
        const lastInteger = parseInt(result.charAt(result.length-1))
        result = result.substring(0,result.length-1)+ ((this.isInRage(lastInteger,1,5)) ? '5' : lastInteger.toString())
        return result
    }

    get currentQuantity() { return this.quantity }
    get currentIsImported() { return this.isImported }
    get currentType() { return this.type }
    get currentPrice() { return this.price }
    get currentName(){ return this.name }
}
