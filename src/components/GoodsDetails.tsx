import { FC, useState } from "react"
import { GoodClass } from "../modules/Good"


interface GoodsDetailsInterface{
    goods: Array<GoodClass>,
    removeAllGoods: () => void
}

export const GoodsDetails: FC<GoodsDetailsInterface> = (props) => {
    const { goods, removeAllGoods } = props
    const [isShownDetails, setIsShownDetails] = useState((goods.length !== 0))
    
    const reset = () => {
        removeAllGoods()
        setIsShownDetails(false)
    }

    const displayResult = () => {
        setIsShownDetails(true)
    }
    
    return <div>
        {(isShownDetails) ?
            <button className='success-btn' style={{backgroundColor:'orange'}} onClick={reset}>Reset</button>
            : <button className='success-btn' disabled={!(goods.length)} onClick={displayResult}>Result</button>}
        {(isShownDetails) ? displayGoodsDetails(goods) : <></>}
    </div>
}

const displayGoodsDetails = (goods: Array<GoodClass>) => {
    let goodsTotalTaxes = 0
    let goodsTotalPriceAfterTax = 0
    return <div>
        {goods.map((good) => {
        //@ts-ignore
            goodsTotalPriceAfterTax += parseFloat(good.priceAfterTex)
            goodsTotalTaxes += ((good.taxRatio/100)) * good.currentPrice
            return (<h3 key={good.currentName}>
                {good.currentQuantity}
                {good.currentIsImported ? 'Imported' : ''}
                {good.currentName}: {good.priceAfterTex}
            </h3>)
        })}
        <h2>Sales Taxes: {goodsTotalTaxes.toFixed(2)}</h2>
        <h2>Total: {goodsTotalPriceAfterTax.toFixed(2)}</h2>
    </div>
}
