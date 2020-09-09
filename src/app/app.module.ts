import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChatComponent } from './chat/chat.component'

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { SocketService } from './socket.service'
import { LoginComponent } from './login/login.component'
import { AccountComponent } from './account/account.component'
import { GroupComponent } from './group/group.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserslistComponent } from './userslist/userslist.component';
import { UpdateComponent } from './update/update.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { GroupMembersListComponent } from './group-members-list/group-members-list.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { DeleteChannelComponent } from './delete-channel/delete-channel.component';
import { DeleteChannelMemberComponent } from './delete-channel-member/delete-channel-member.component';
import { AddChannelMembersComponent } from './add-channel-members/add-channel-members.component'

@NgModule({
  declarations: [AppComponent, ChatComponent, LoginComponent, AccountComponent, GroupComponent, UserslistComponent, UpdateComponent, AddgroupComponent, GroupMembersListComponent, CreateChannelComponent, DeleteChannelComponent, DeleteChannelMemberComponent, AddChannelMembersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
