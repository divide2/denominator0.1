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

export class GroupApply {
  memoName = ''
  toGroupId = ''
}

export class Application {
  id = ''
  memoNmae = ''
  status = ''
  user = new User()
}

export class ConfirmForm {
  groupApplicationId = ''
  memoName = ''
  roleId = 1
}

// 合作
export class CooperationApply {
  fromGroupId = ''
  remarks = ''
  toGroupId = ''
}

