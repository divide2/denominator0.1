import { Page } from "@/views/types/index";

export class Specs {
  id = 0
  image: Array<string> = []
  name = ''
  price = 0
  productId = 0
}


export class Product {
  name = ''
  remarks = ''
  image: Array<string> = []
  specs: Array<Specs> = []
  teamId = ''
  unit = ''
  image = []
}

export class ProductUpdate extends Product {
  id = 0
  initAmount = 0
}

export class ListParam extends Page {

}

