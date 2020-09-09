import { Component, OnInit } from '@angular/core'
import { SocketService } from '../socket.service'
import { FormsModule } from '@angular/forms'
import { GroupsService } from '../groups.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socket
  messagecontent: string = ''
  messages: string[] = []
  rooms = []
  roomlist: string = ''
  roomnotice: string = ''
  currentroom: string = ''
  isinRoom = false
  newroom: string = ''
  numusers: number = 0
  username = ''
  groupList = []
  group: string = ''
  channelsList = []

  constructor(
    private socketservice: SocketService,
    private gData: GroupsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem('username')
    this.gData.showGroup().subscribe((data: any) => {
      // console.log(data)
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].members.length; j++) {
          if (this.username == data[i].members[j]) {
            this.groupList.push(data[i].group_name)
          }
        }
      }
      for (let i = 0; i < data.length; i++) {
        if (this.group == data[i].group_name) {
          for (let j = 0; j < data[i].group_name[j].length; j++) {}
        }
      }
    })
    this.socketservice.initSocket()
    this.socketservice.getMessage(m => {
      this.messages.push(m)
    })
    this.socketservice.reqroomList()
    this.socketservice.getroomList(msg => {
      this.rooms = JSON.parse(msg)
    })
    this.socketservice.notice(msg => {
      this.roomnotice = msg
    })
    this.socketservice.joined(msg => {
      this.currentroom = msg
      if (this.currentroom != '') {
        this.isinRoom = true
      } else {
        this.isinRoom = false
      }
    })
  }

  joinroom() {
    this.socketservice.joinroom(this.roomlist)
    this.socketservice.reqnumusers(this.roomlist)
    this.socketservice.getnumusers(res => {
      this.numusers = res
    })
  }
  clearnotice() {
    this.roomnotice = ''
  }

  leaveroom() {
    this.socketservice.leaveroom(this.currentroom)
    this.socketservice.reqnumusers(this.currentroom)
    this.socketservice.getnumusers(res => {
      this.numusers = res
    })
    this.roomlist = null
    this.currentroom = ''
    this.isinRoom = false
    this.numusers = 0
    this.roomnotice = ''
    this.messages = []
  }
  channellist() {
    this.channelsList = []
    this.http.get<any>('http://localhost:3000/api/showChannel').subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (this.group == data[i].group_name) {
          for (let j = 0; j < data[i].channel.length; j++) {
            this.channelsList.push(data[i].channel[j].channel_name)
          }
        }
      }
    })
  }

  createroom() {
    //console.log(this.createroom);
    this.socketservice.createroom(this.newroom)
    this.socketservice.reqroomList()
    this.newroom = ''
  }

  chat() {
    if (this.messagecontent) {
      this.socketservice.sendMessage(this.messagecontent)
      this.messagecontent = null
    } else {
      console.log('No Message')
    }
  }
}
