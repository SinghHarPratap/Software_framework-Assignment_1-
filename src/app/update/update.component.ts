import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service'
import { Users } from 'src/users'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  idparam
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
    private userservice: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idparam = params.get('id')
      // console.log(this.idparam)
    })
    this.uData.getuser(this.idparam).subscribe(data => {
      this.id = data[0].id
      this.username = data[0].username
      this.age = data[0].age
      this.role = data[0].role
      this.birthday = data[0].birthday
      this.objectId = data[0]._id
    })
  }
  update() {
    var user: Users = new Users(
      this.objectId,
      this.id,
      this.username,
      this.password,
      this.age,
      this.birthday,
      this.role,
      this.groupAdmin
    )
    this.uData.updateitem(user).subscribe(data => {
      this.router.navigate(['/list', data.ok])
    })
  }
}
