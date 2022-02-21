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
})
