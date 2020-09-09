import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'
import { GroupsService } from '../groups.service'

@Component({
  selector: 'app-delete-channel',
  templateUrl: './delete-channel.component.html',
  styleUrls: ['./delete-channel.component.css']
})
export class DeleteChannelComponent implements OnInit {
  idparam
  group_name = ''
  members = ''
  groupmembers = []
  groupName = []
  channel_name = ''
  channelList = []

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
      // console.log(data + ' this is name')

      this.group_name = data[0].group_name
      // console.log(JSON.stringify(this.group_name))
      // console.log(data)
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].channel.length; j++) {
          console.log(data[i].channel[j].channel_name)
          this.channelList.push(data[i].channel[j].channel_name)
        }

        // console.log(this.groupmembers)
      }
    })
  }
  deleteChannel() {
    this.http
      .post<any>('http://localhost:3000/api/deleteChannel', {
        group_name: this.group_name,
        channel_name: this.channel_name
      })
      .subscribe(data => {
        console.log(data)
      })
    this.router.navigateByUrl('userslist')
  }
}
