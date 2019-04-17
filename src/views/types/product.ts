import { Page, Unit } from "@/views/types/index";

export class Specs {
  id = 0
  image: String[] = [];
  name = ''
  price = 0
  productId = 0
  amount = 0 // 面向订单添加
}


export class Product {
  name = ''
  remarks = ''
  specs: Array<Specs> = [new Specs()] // 新建一个空的规格
  teamId = ''
  image: String[] = []
  createTime = ''
  id = 0
  initAmount = 0
  units: Array<Unit> = [new Unit('', '1')] // 新建一个空的单位
}

export class ListParam extends Page {

}

export class StockDTO {
  teamId = '';
  productId = '';
  warehouseId = '';
  specStocks: ProductSpec[] = [];

}

class ProductSpec {
  productSpecId = '';
  amount = 0
}
