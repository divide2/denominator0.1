// 添加
import { User } from "@/views/types/index"

export class Group {
  name = ''
  image = ''
  id = ''
}

export class GroupUser {
  role = {
    code: '',
    id: 0,
    name: ''
  }
  user = new User()
}