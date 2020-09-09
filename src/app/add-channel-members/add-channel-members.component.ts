import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'
import { GroupsService } from '../groups.service'

@Component({
  selector: 'app-add-channel-members',
  templateUrl: './add-channel-members.component.html',
  styleUrls: ['./add-channel-members.component.css']
})
export class AddChannelMembersComponent implements OnInit {
  idparam
  group_name = ''
  members = ''
  groupmembers = []
  groupName = []
  channel_name = ''
  channelList = []
  channel_member = ''
  channelListMembe = []
  channelDetail = []

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
      this.group_name = data[0].group_name
      for (let i = 0; i < data.length; i++) {
        console.log(data)
        for (let j = 0; j < data[i].members.length; j++) {
          console.log(data[i].members)
          this.channelListMembe.push(data[i].members[j])
        }
      }

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].channel.length; j++) {
          this.channelDetail.push(data[i].channel[j])
          this.channelList.push(data[i].channel[j].channel_name)
        }
      }
    })
  }

  addChannelMember() {
    this.http
      .post<any>('http://localhost:3000/api/addChannelMember', {
        group_name: this.group_name,
        channel_name: this.channel_name,
        channel_member: this.channel_member
      })
      .subscribe(data => {
        console.log(data)
        this.router.navigateByUrl('userslist')
      })
    this.router.navigateByUrl('userslist')
  }
}
