import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { GroupsService } from '../groups.service'
import { Users } from 'src/users'
import { Groups } from 'src/groups'

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  usersObjects: any
  groupObjects: any
  constructor(
    private uData: UserService,
    private router: Router,
    private http: HttpClient,
    private gData: GroupsService
  ) {}

  ngOnInit() {
    this.uData.showUser().subscribe(data => {
      this.usersObjects = data
    })
    this.gData.showGroup().subscribe(data => {
      this.groupObjects = data
    })
  }

  deleteproduct(id) {
    if (confirm('Are you sure you want to delete this user')) {
      this.uData.deleteitem(id).subscribe(data => {
        if (data.ok == 1) {
          alert('deleted')
          this.uData.showUser().subscribe(data => {
            this.usersObjects = data
          })
        }
      })
    }
  }
  deletegroup(id) {
    if (confirm('Are you sure you want to delete this group')) {
      this.gData.deleteitem(id).subscribe(data => {
        if (data.ok == 1) {
          this.gData.showGroup().subscribe(data => {
            this.groupObjects = data
          })
        }
      })
    }
  }
}
