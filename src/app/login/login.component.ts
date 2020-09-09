import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SocketService } from '../socket.service'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objectId: string = ''
  id = null
  name = ''
  password = ''
  age: null
  birthday: null
  role: ''
  groupAdmin: [] = []
  correct = false
  newUser: Users
  server = 'http://localhost:3000/api/auth'

  constructor(
    private uData: UserService,
    private router: Router,
    private socketService: SocketService,
    private http: HttpClient
  ) {}

  ngOnInit() {}
  LoggedIn() {
    // console.log('hete')
    this.newUser = new Users(
      '',
      this.id,
      this.name,
      this.password,
      this.age,
      this.birthday,
      this.role,
      this.groupAdmin
    )
    this.uData.add(this.newUser).subscribe(data => {
      if (data.success == true) {
        localStorage.setItem('username', data.username)
        this.router.navigateByUrl('/account')
      } else {
        alert('try again')
      }
      // console.log(data)
    })
  }

  // to dispaly authenticat the user and display their data and send the information to the account page.
  //   LoggedIn() {
  //     this.http
  //       .post('http://localhost:3000/api/auth', { username: this.name, email: this.email })
  //       .subscribe((data: any) => {
  //         if (data.valid == true) {
  //           console.log(data)
  //           localStorage.setItem('username', data.username)
  //           localStorage.setItem('useremail', data.email)
  //           localStorage.setItem('userage', data.age)
  //           localStorage.setItem('userbirthday', data.birthdate)
  //           localStorage.setItem('userrole', data.role)
  //           this.router.navigateByUrl('/account')
  //         } else {
  //           alert('wrong, credentials')
  //         }
  //       })
  //   }
}
