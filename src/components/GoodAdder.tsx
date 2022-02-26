import { FC, useRef, useState } from 'react'
import {GoodClass} from '../modules/Good'

interface GoodAdderInterface{
    addGood: (element: any) => void
}
export const GoodAdder: FC<GoodAdderInterface> = (props) => {
    const {addGood} = props

    const [isError,setIsError] = useState(false)

    const goodQuantityInput = useRef<HTMLSelectElement>(null)
    const goodIsImportedInput = useRef<HTMLSelectElement>(null)
    const goodTypeInput = useRef<HTMLSelectElement>(null)
    const goodNameInput = useRef<HTMLInputElement>(null)
    const goodPriceInput = useRef<HTMLInputElement>(null)

    const addingNewGood = () => {
        const cleanInputs = () => {
            goodQuantityInput.current!.value = GoodClass.minQuantity.toString()
            goodIsImportedInput.current!.value = 'No'
            goodTypeInput.current!.value = GoodClass.validTypes[0]
            goodNameInput.current!.value = ''
            goodPriceInput.current!.value = ''
        }


        setIsError(false)
        const goodQuantity = parseInt(goodQuantityInput.current!.value) 
        const goodIsImported = (goodQuantityInput.current!.value === 'Yes')
        const goodType = goodTypeInput.current!.value
        const goodName = goodNameInput.current!.value
        const goodPrice = parseInt(goodPriceInput.current!.value)
        try {
            const newGood = new GoodClass()
            newGood.currentQuantity = goodQuantity
            newGood.currentIsImported = goodIsImported
            newGood.currentType = goodType
            newGood.currentName = goodName
            newGood.currentPrice = goodPrice 
            addGood(newGood)
            cleanInputs()
        } catch (error) {
            setIsError(true)
            alert(error)
        }
    }

    return (<>
        <table style={{backgroundColor:(isError) ? 'red' : ''}}>
            <thead>
                <tr>
                    <th>New Good Quantity</th>
                    <th>Is New Good Imported</th>
                    <th>New Good Type</th>
                    <th>New Good Name</th>
                    <th>New Good Price</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td>
                        <select ref={goodQuantityInput}>
                            {Array.from({ length: (GoodClass.maxQuantity - GoodClass.minQuantity + 1) },
                                (_, i) => GoodClass.minQuantity + i)
                                .map(quantity => {
                                    return <option key={quantity}>{quantity}</option>
                                })
                            }
                        </select>
                    </td>
                    <td>
                        <select ref={goodIsImportedInput}>
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </td>
                    <td>
                        <select ref={goodTypeInput}>
                            {GoodClass.validTypes.map((validType) => {
                                return <option key={validType}>{validType}</option>
                            })}
                        </select>
                    </td>
                    <td>
                        <input type='string' ref={goodNameInput}/>
                    </td>
                    <td>
                        <input type='number' ref={goodPriceInput}/>
                    </td>
                </tr>
            </tfoot>
        </table>
        <button className='success-btn' onClick={addingNewGood}>
            Add Good
        </button>
        </>)
}


