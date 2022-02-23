import {FC} from 'react'    
import { useContext } from "react"

import { GoodClass } from '../modules/Good'

interface GoodListInterface{
    goods:Array<GoodClass>
}
export const GoodsList:FC<GoodListInterface> = (parmas) => {
    const {goods} = parmas

    return <>
        <h1>list</h1>
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th>Product Quantity</th>
                    <th>Is Product Imported</th>
                    <th>Product Type</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                {goods.map(good => {
                    return <tr>
                        <td>{good.currentQuantity}</td>
                        <td>{(good.currentIsImported) ? 'Yes' : 'No'}</td>
                        <td>{good.currentType}</td>
                        <td>{good.currentName}</td>
                        <td>{good.currentPrice}</td>
                    </tr>
                })}
            </tbody>
        </table>
    
    </>
}