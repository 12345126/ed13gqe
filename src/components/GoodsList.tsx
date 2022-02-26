import {FC} from 'react'    

import { GoodClass } from '../modules/Good'

interface GoodListInterface{
    goods:Array<GoodClass>
}
export const GoodsList:FC<GoodListInterface> = (prams) => {
    const {goods} = prams

    return <>
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th>Good Quantity</th>
                    <th>Is Good Imported</th>
                    <th>Good Type</th>
                    <th>Good Name</th>
                    <th>Good Price</th>
                </tr>
            </thead>
            <tbody>
                {goods.map(good => {
                    return <tr key={good.currentName}>
                        <td>{good.currentQuantity}</td>
                        <td>{(good.currentIsImported) ? 'Yes' : 'No'}</td>
                        <td>{good.currentType}</td>
                        <td>{good.currentName}</td>
                        <td>{good.currentPrice}</td>
                    </tr>
                })}
            </tbody>
        </table>
        {(goods.length === 0) ? <h1 style={{textAlign:'center'}}>There is no goods !</h1> : <></>}
    </>
}