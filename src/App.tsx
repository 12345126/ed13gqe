import useArray from './customHooks/useArray';

import { GoodClass } from './modules/Good';

import { GoodsList } from './components/GoodsList';
import { GoodAdder } from './components/GoodAdder';
import { GoodsDetails } from './components/GoodsDetails';

export const App = () => {

  const goodsInitialArray: GoodClass[] = []

  // dummy data
  //--------------------------------------------------
  const good1 = new GoodClass()
  good1.currentName = 'good_1'
  good1.currentPrice = 12.49
  good1.currentIsImported = true
  good1.currentType = GoodClass.validTypes[0]
  goodsInitialArray.push(good1)

  const good2 = new GoodClass()
  good2.currentName = 'good_2'
  good2.currentPrice = 5.99
  good2.currentQuantity = 3
  good2.currentType = GoodClass.validTypes[GoodClass.validTypes.length-1]
  goodsInitialArray.push(good2)
  //--------------------------------------------------

  const { array: goods, set:setGood, push:addGood, clear:removeAllGoods } = useArray(goodsInitialArray)

  return (<>
    <hr/><hr/>
      <GoodsList goods={goods} />
    <hr/><hr/>
      <GoodAdder addGood={addGood}/>
    <hr /><hr />
      <GoodsDetails goods={goods} removeAllGoods={removeAllGoods}/>
    <hr /><hr />
  </>)
}

