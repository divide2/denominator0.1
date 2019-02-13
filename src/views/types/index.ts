export class LoginForm {
  public username = ''
  public password = ''
  public grant_type = 'password'
}


export class Group {
  public groupId = ''
  public groupName = ''
}

interface Query {

}

export class UserSearchQuery implements Query {
  query: string = ''
}