export class ProductSpecPrice { // 不同规格商品价格
  amount = 0
  price = 0
  productId = 0
  productSpecId = 0
  unit = ''
  image: string[] = []
}

export class Order {
  attachment = '' // 附件
  balancePayment = 0 //尾款
  deliverDate = '' // 交付时间
  earnestMoney = 0 // 定金
  productSpecPrices: Array<ProductSpecPrice> = []
  remarks = ''
  toTeamId = 0
}