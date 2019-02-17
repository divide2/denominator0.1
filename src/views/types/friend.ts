import { User } from "@/views/types/index";

export class ApplyForm {
  memoName = ''
  remarks = ''
  toId: number

  constructor (id: number) {
    this.toId = id
  }
}

export class Application{
  remark=''
  slefApplay=true
  status=''
  user=new User()
}

export class Confirm{
  memoName=''
  toId=0
}