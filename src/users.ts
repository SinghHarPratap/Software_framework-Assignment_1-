export class Users {
  objid: string
  id: number
  username: string
  pwd: string
  age: number
  birthday: number
  role: string
  groupAdmin: []

  constructor(
    objid: string,
    _id: number,
    _username: string,
    _pwd: string,
    _age: number,
    _birthday: number,
    _role: string,
    _groupAdmin: []
  ) {
    this.objid = objid
    this.id = _id
    this.username = _username
    this.pwd = _pwd
    this.age = _age
    this.birthday = _birthday
    this.role = _role
    this.groupAdmin = _groupAdmin
  }
}
