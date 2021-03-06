export class LoginForm {
  public username = ''
  public password = ''
  public grant_type = 'password'
}

export class JoinForm {
  public account = ''
  public verifyCode = ''
  password= ''
  rePassword =  ''
}

interface Query {

}

export class SearchQuery implements Query {
  query: string = ''
}

export class User {
  public avatar = ''
  public email = ''
  public gender = ''
  public nickname = ''
  public phone = ''
  public userId = 0
  public username = ''
}

export class Delete {
  id: number | string

  constructor (id: number | string) {
    this.id = id
  }
}

export class Detail {
  id: number | string

  constructor (id: number | string) {
    this.id = id
  }
}

export class idParam {
  id: number | string

  constructor (id: number | string) {
    this.id = id
  }
}

export class Page {
  size = 10
  page = 0
}

// 商品单位
export class Unit {
  name = ''
  rate = ''

  constructor (name? = '', rate? = '') {
    this.name = name
    this.rate = rate
  }
}


















