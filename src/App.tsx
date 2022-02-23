import { useState } from 'react';
import { GoodClass } from './modules/Good';
import { GoodsList } from './components/GoodsList';

export const App = () => {

  const goodsInitialArray: GoodClass[] = []
  
  const good1 = new GoodClass()
  good1.currentName = 'good 1'
  good1.currentPrice = 12
  goodsInitialArray.push(good1)

  const good2 = new GoodClass()
  good2.currentName = 'good 2'
  good2.currentPrice = 14
  good2.currentQuantity = 2
  good2.currentIsImported = true
  goodsInitialArray.push(good2)

  const good3 = new GoodClass()
  good3.currentName = 'good 3'
  good3.currentPrice = 12
  good3.currentType = good3.validTypes[1]
  goodsInitialArray.push(good3)

  const [goods,setGood] = useState(goodsInitialArray)

  return (
    <GoodsList goods={goods}/>
  )
}

