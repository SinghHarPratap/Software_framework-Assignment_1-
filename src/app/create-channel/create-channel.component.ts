import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'
import { GroupsService } from '../groups.service'

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css']
})
export class CreateChannelComponent implements OnInit {
  idparam
  group_name = ''
  members = ''
  groupmembers = []
  groupName = []
  channel_name = ''

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
  addChannel() {
    this.http
      .post<any>('http://localhost:3000/createchannel', {
        group_name: this.group_name,
        channel_name: this.channel_name
      })
      .subscribe(data => {
        console.log(data)
      })
    this.router.navigateByUrl('userslist')
  }
}
