import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Users } from '../users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  create(users: Users) {
    return this.http.post<any>('http://localhost:3000/createUser', users)
  }
  showUser() {
    return this.http.get<any>('http://localhost:3000/api/getUser')
  }
  getuser(id) {
    return this.http.post<any>('http://localhost:3000/api/getuser', { id: id })
  }
  checkvalidid(userId) {
    return this.http.post<any>('http://localhost:3000/api/checkvalidid', { id: userId })
  }
  deleteitem(userId) {
    return this.http.post<any>('http://localhost:3000/api/deleteitem', { id: userId })
  }
  updateitem(users: Users) {
    return this.http.post<any>('http://localhost:3000/api/update', users)
  }
  add(users: Users) {
    return this.http.post<any>('http://localhost:3000/api/auth', users)
  }
}
