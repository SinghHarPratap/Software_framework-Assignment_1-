import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'
import { GroupsService } from '../groups.service'

@Component({
  selector: 'app-group-members-list',
  templateUrl: './group-members-list.component.html',
  styleUrls: ['./group-members-list.component.css']
})
export class GroupMembersListComponent implements OnInit {
  idparam
  group_name = ''
  members = ''
  groupmembers = []
  groupName = []
  constructor(
    private uData: UserService,
    private router: Router,
    private http: HttpClient,
    private gData: GroupsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idparam = params.get('id')
      console.log(this.idparam)
    })
    this.gData.showGroupData(this.idparam).subscribe((data: any) => {
      console.log(data + ' this is name')

      this.group_name = data[0].group_name
      console.log(JSON.stringify(this.group_name))
      // console.log(data)
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].members.length; j++) {
          this.groupmembers.push(data[i].members[j])
        }

        // console.log(this.groupmembers)
      }
    })
  }

  deleteMember(event) {
    console.log(event)
    this.http
      .post<any>('http://localhost:3000/deleteMember', {
        group_name: this.group_name,
        members: this.members
      })
      .subscribe((data: any) => {
        console.log(data)
        if (data.match == true) {
          alert('error')
        } else {
          alert('deleted')
          this.router.navigateByUrl('/userslist')
        }
      })
  }
}
