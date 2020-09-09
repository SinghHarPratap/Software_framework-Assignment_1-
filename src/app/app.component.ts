import { Component } from '@angular/core'
import {} from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat'
  logout() {
    localStorage.clear()
  }
}
