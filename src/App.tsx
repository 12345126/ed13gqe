import useArray from './customHooks/useArray';
import { GoodClass } from './modules/Good';
import { GoodsList } from './components/GoodsList';
import { GoodAdder } from './components/GoodAdder';
import { GoodsDetails } from './components/GoodsDetails';

export const App = () => {

  const goodsInitialArray: GoodClass[] = []
  
  const good1 = new GoodClass()
  good1.currentName = 'good_1'
  good1.currentPrice = 12.49
  good1.currentType = 'food'
  goodsInitialArray.push(good1)

  const good2 = new GoodClass()
  good2.currentName = 'good_2'
  good2.currentPrice = 14.99
  good2.currentType = 'other'
  goodsInitialArray.push(good2)

  const good3 = new GoodClass()
  good3.currentName = 'good_3'
  good3.currentPrice = 0.85
  good3.currentType = 'food'
  goodsInitialArray.push(good3)

  // const good1 = new GoodClass()
  // good1.currentName = 'good 1'
  // good1.currentPrice = 12
  // goodsInitialArray.push(good1)

  // const good2 = new GoodClass()
  // good2.currentName = 'good 2'
  // good2.currentPrice = 14
  // good2.currentQuantity = 2
  // good2.currentIsImported = true
  // goodsInitialArray.push(good2)

  // const good3 = new GoodClass()
  // good3.currentName = 'good 3'
  // good3.currentPrice = 12
  // good3.currentType = GoodClass.validTypes[1]
  // goodsInitialArray.push(good3)

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

