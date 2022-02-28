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
            : <button className='success-btn' disabled={(goods.length === 0)} onClick={displayResult}>Result</button>}
        {(isShownDetails) ? <DisplayGoodsDetails goods={goods}/> : <></>}
    </div>
}

interface displayGoodsDetailsInterface{
    goods: Array<GoodClass>
}
const DisplayGoodsDetails: FC<displayGoodsDetailsInterface> = (props) => {
    const {goods} = props

    let goodsTotalPrice = 0
    let goodsTotalPriceAfterTax = 0
    return <div>
        {goods.map((good) => {
            goodsTotalPriceAfterTax += parseFloat(good.priceAfterTex)
            goodsTotalPrice += good.currentPrice
            return (<h3 key={good.currentName}>
                <span style={{color:'blue'}}> {good.currentQuantity} </span>
                <span style={{color:'red'}}> {good.currentIsImported ? 'Imported' : ''} </span>
                <span style={{ color: 'green' }}>{good.currentName}</span>
                <span style={{color:'brown'}}>:</span>&nbsp;
                {good.priceAfterTex}
            </h3>)
        })}
        <hr/>
        <h2>
            <span style={{color:'green'}}>Sales Taxes</span>
            <span style={{color:'brown'}}>:</span>&nbsp;
            {(goodsTotalPriceAfterTax - goodsTotalPrice).toFixed(2)}
        </h2>
        <h2>
            <span style={{color:'green'}}>Total</span>
            <span style={{color:'brown'}}>:</span>&nbsp;
            {goodsTotalPriceAfterTax.toFixed(2)}
        </h2>
    </div>
}

