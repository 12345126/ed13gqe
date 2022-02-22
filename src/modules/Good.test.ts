//@ts-ignore
const {GoodClass} = require('./good')

let goodObject = new GoodClass()

describe('Good Class Unit Testing', () => {
    describe('Initialization Testing', () => {
        beforeEach(() => {
            goodObject = new GoodClass()
        })
        it("Quantity should be equal min-quantity", () => {
            expect(goodObject.currentQuantity).toBe(goodObject.minQuantity)
        })
        it("Min-quantity should be more than zero", () => {
            expect(goodObject.minQuantity).toBeGreaterThan(0)
        })
        it("IsImported should be false", () => {
            expect(goodObject.currentIsImported).toBeFalsy()
        })
        it("Valid Types array should not be empty", () => {
            expect(goodObject.validTypes.length).toBeGreaterThan(0)
        })
        it("Type should be valid type", () => {
            expect(goodObject.validTypes).toContain(goodObject.currentType)
        })
        it("Tax free types array should not be empty", () => {
            expect(goodObject.taxFreeTypes.length).toBeGreaterThan(0)
        })
        it("Tax free types should be valid types", () => {
            for (let taxFreeType of goodObject.taxFreeTypes) {
                expect(goodObject.validTypes).toContain(taxFreeType)
            }
        })
        it("Price should be equal min-price", () => {
            expect(goodObject.currentPrice).toBe(goodObject.minPrice)
        })
        it("Min-price should be more than zero", () => {
            expect(goodObject.currentPrice).toBeGreaterThan(0)
        })
        
    })
    describe('Setter Testing', () => {
        beforeEach(() => {
            goodObject = new GoodClass()
        })
        it("Quantity should be less than or equal min-quantity", () => {
            expect(() => {goodObject.currentQuantity = goodObject.minQuantity-1}).toThrow(RangeError)
        })
        it("Quantity should be greater than or equal max-quantity", () => {
            expect(() => {goodObject.currentQuantity = goodObject.maxQuantity+1}).toThrow(RangeError)
        })
        it("Type should be valid type", () => {
            const invalidType = 'test-'+Math.random()
            expect(() => {goodObject.currentType = invalidType}).toThrow(TypeError)
        })
        it("Price should be less than or equal min-price", () => {
            expect(() => {goodObject.currentPrice = goodObject.minPrice-1}).toThrow(RangeError)
        })
        it("Price should be greater than or equal max-price", () => {
            expect(() => {goodObject.currentPrice = goodObject.maxPrice+1}).toThrow(RangeError)
        })
    })
    describe('Tax Ratio testing',() => {
        beforeEach(() => {
            goodObject = new GoodClass()
        })
        it("Tax ratio should be 15%", () => {
            goodObject.isImported = true
            const notTaxFreeType = goodObject.validTypes.find((type: string) => !(goodObject.taxFreeTypes.includes(type)))
            goodObject.type = notTaxFreeType
            expect(goodObject.taxRatio).toBe(15)
        })
        it("Tax ratio should be 10%", () => {
            goodObject.isImported = false
            const notTaxFreeType = goodObject.validTypes.find((type: string) => !(goodObject.taxFreeTypes.includes(type)))
            goodObject.type = notTaxFreeType
            expect(goodObject.taxRatio).toBe(10)
        })
        it("Tax ratio should be 5%", () => {
            goodObject.isImported = true
            goodObject.type = goodObject.taxFreeTypes[0]
            expect(goodObject.taxRatio).toBe(5)
        })
        it("Tax ratio should be 0%", () => {
            goodObject.isImported = false
            goodObject.type = goodObject.taxFreeTypes[0]
            expect(goodObject.taxRatio).toBe(0)
        })
    })
    describe('Price after tax testing',() => {
        beforeEach(() => {
            goodObject = new GoodClass()
        })
        it("Price after tax should be 12.49", () => {
            goodObject.isImported = false
            goodObject.type = goodObject.taxFreeTypes[0]
            goodObject.price = 12.49
            goodObject.quantity = 1
            expect(goodObject.priceAfterTex).toBe("12.49")
        })
        it("Price after tax should be 10.50", () => {
            goodObject.isImported = true
            goodObject.type = goodObject.taxFreeTypes[0]
            goodObject.price = 10
            goodObject.quantity = 1
            expect(goodObject.priceAfterTex).toBe("10.50")
        })
        it("Price after tax should be 11.85", () => {
            goodObject.isImported = true
            goodObject.type = goodObject.taxFreeTypes[0]
            goodObject.price = 11.25
            goodObject.quantity = 1
            expect(goodObject.priceAfterTex).toBe("11.85")
        })
        it("Price after tax should be 54.65", () => {
            goodObject.isImported = true
            const notTaxFreeType = goodObject.validTypes.find((type: string) => !(goodObject.taxFreeTypes.includes(type)))
            goodObject.type = notTaxFreeType
            goodObject.price = 47.50
            goodObject.quantity = 1
            expect(goodObject.priceAfterTex).toBe("54.65")
        })
        it("Price after tax should be (3 x max-quantity)", () => {
            goodObject.isImported = false
            goodObject.type = goodObject.taxFreeTypes[0]
            goodObject.price = 3
            goodObject.quantity = goodObject.maxQuantity
            expect(goodObject.priceAfterTex).toBe((goodObject.price*goodObject.maxQuantity).toFixed(2))
        })
    })
})



