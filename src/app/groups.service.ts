import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Groups } from '../groups'

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor(private http: HttpClient) {}
  showGroup() {
    return this.http.get<any>('http://localhost:3000/api/showgroup')
  }
  showGroupData(id) {
    return this.http.post<any>('http://localhost:3000/api/getgroup', { id: id })
  }

  deleteitem(groupId) {
    return this.http.post<any>('http://localhost:3000/api/deletegroup', { id: groupId })
  }
  // deletememeber(groupId) {
  //   return this.http.post<any>('http://localhost:3000/api/deleteMember', { id: groupId })
  // }
  checkvalidid(groupId) {
    return this.http.post<any>('http://localhost:3000/api/checkvalididgroup', { id: groupId })
  }
  create(group: Groups) {
    return this.http.post<any>('http://localhost:3000/createGroup', group)
  }
}
