export class LoginForm {
  public username = ''
  public password = ''
  public grant_type = 'password'
}

export class joinForm {
  public account = ''
  public password = ''
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

export class PageList {
  page = 1
  size = 10
}