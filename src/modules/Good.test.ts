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
})
