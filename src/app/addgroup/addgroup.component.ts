import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'
import { GroupsService } from '../groups.service'

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
  idparam
  group_name: string = ''
  objectId: string = ''
  id = null
  username = ''
  groupList: string[] = []
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
    })
    this.uData.getuser(this.idparam).subscribe(data => {
      this.id = data[0].id
      this.username = data[0].username
    })
    this.gData.showGroup().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        this.groupList.push(data[i].group_name)
      }
    })
  }

  addMember(event) {
    this.http
      .post<any>('http://localhost:3000/addmember', {
        username: this.username,
        group_name: this.group_name
      })
      .subscribe((data: any) => {
        console.log(data)
        if (data.match == true) {
          alert('member is already there')
        } else {
          alert('member Added')
          this.router.navigateByUrl('/userslist')
        }
      })
  }
}
