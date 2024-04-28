let laptopPrice1 = [14000,12000,10000,16000]
let laptopPrice2 = [22000,20000,24000,26000]
let combinePrice = [...laptopPrice1,...laptopPrice2]
combinePrice.sort((a,b) => a - b)
console.log(combinePrice);
