import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { Groups } from 'src/groups'
import { GroupsService } from '../groups.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  animations: [
    trigger('iderrorState', [
      state(
        'show',
        style({
          opacity: 1,
          display: 'block'
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          display: 'none'
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ]),
    trigger('noticeState', [
      state(
        'show',
        style({
          opacity: 1,
          display: 'block'
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          display: 'none'
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class GroupComponent implements OnInit {
  newGroup: Groups
  newProductMessage = ''
  iderrormsg: string = 'This id already exists & New ID is required.'
  iderrormsg2: string = ''
  iderrorshow: boolean = false
  noticeshow: boolean = false
  objectId: string = ''
  id = null
  group_name = ''
  members: string[] = []
  channel: [{ channelname: ''; logs: [] }] = [{ channelname: '', logs: [] }]

  groupAdmin: [] = []
  constructor(private http: HttpClient, private gData: GroupsService, private router: Router) {}
  ngOnInit() {}
  checkvaildid(event) {
    this.noticeshow = false
    this.gData.checkvalidid(event).subscribe(data => {
      if (data.success == 0) {
        this.iderrormsg2 = ' Something above ' + data.topnum
        this.iderrorshow = !this.iderrorshow
      } else {
        this.iderrorshow = false
        this.iderrormsg2 = null
      }
    })
  }

  get stateName() {
    return this.iderrorshow ? 'show' : 'hide'
  }
  get noticeName() {
    return this.noticeshow ? 'show' : 'hide'
  }
  addnewProduct(event) {
    event.preventDefault()
    if (this.id == null) {
      this.iderrorshow = !this.iderrorshow
    } else {
      this.newGroup = new Groups('', this.id, this.group_name, this.members, this.channel)
      this.gData.create(this.newGroup).subscribe(data => {
        this.noticeshow = true
        this.router.navigateByUrl('/userslist')
        // this.router.navigateByUrl('/')
        if (data.err == null) {
          this.newProductMessage = data.num + ' new User (' + this.group_name + ') was added'
        } else {
          this.newProductMessage = data.err
        }

        this.id = null
        this.group_name = ''
        this.members = []
        this.channel = [{ channelname: '', logs: [] }]
      })
    }
  }
}
