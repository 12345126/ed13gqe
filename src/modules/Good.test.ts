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
        it("isImported should be false", () => {
            expect(goodObject.currentIsImported).toBeFalsy()
        })
        it("Type should be valid type", () => {
            expect(goodObject.validTypes).toContain(goodObject.currentType)
        })
        it("Price should be equal min-price", () => {
            expect(goodObject.currentPrice).toBe(goodObject.minPrice)
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
        it("Free tax types should be valid types", () => {
            for (let taxFreeType of goodObject.taxFreeTypes) {
                expect(goodObject.validTypes).toContain(taxFreeType)
            }
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


})
