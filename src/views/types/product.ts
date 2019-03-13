import { Page } from "@/views/types/index";

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
  specs: Array<Specs> = []
  teamId = ''
  unit = ''
  image: String[] = []
  createTime = ''
  id = 0
  initAmount = 0
}

export class ListParam extends Page {

}

