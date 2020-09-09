import { Component, OnInit, ComponentFactoryResolver } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
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
export class AccountComponent implements OnInit {
  newUser: Users
  newProductMessage = ''
  iderrormsg: string = 'This id already exists & New ID is required.'
  iderrormsg2: string = ''
  iderrorshow: boolean = false
  noticeshow: boolean = false
  objectId: string = ''
  id = null
  username = ''
  password = ''
  age: null
  birthday: null
  role: ''
  groupAdmin: [] = []

  constructor(
    private uData: UserService,
    private router: Router,
    private http: HttpClient,
    private userservice: UserService
  ) {}

  ngOnInit() {}
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
      this.newUser = new Users(
        '',
        this.id,
        this.username,
        this.password,
        this.age,
        this.birthday,
        this.role,
        this.groupAdmin
      )
      this.uData.create(this.newUser).subscribe(data => {
        this.noticeshow = true
        this.router.navigateByUrl('/userslist')
        if (data.err == null) {
          this.newProductMessage = data.num + ' new User (' + this.username + ') was added'
        } else {
          this.newProductMessage = data.err
        }

        this.id = null
        this.password = ''
        this.age = null
        this.username = ''
        this.role = ''
        this.birthday = null
        this.groupAdmin = []
      })
    }
  }
  checkvaildid(event) {
    this.noticeshow = false
    this.uData.checkvalidid(event).subscribe(data => {
      if (data.success == 0) {
        this.iderrormsg2 = ' Something above ' + data.topnum
        this.iderrorshow = !this.iderrorshow
      } else {
        this.iderrorshow = false
        this.iderrormsg2 = null
      }
    })
  }
  newGroup() {
    this.router.navigateByUrl('/group')
  }
}
