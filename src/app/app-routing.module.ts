import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ChatComponent } from './chat/chat.component'
import { LoginComponent } from './login/login.component'
import { AccountComponent } from './account/account.component'
import { GroupComponent } from './group/group.component'
import { UserslistComponent } from './userslist/userslist.component'
import { UpdateComponent } from './update/update.component'
import { AddgroupComponent } from './addgroup/addgroup.component'
import { GroupMembersListComponent } from './group-members-list/group-members-list.component'
import { CreateChannelComponent } from './create-channel/create-channel.component'
import { DeleteChannelComponent } from './delete-channel/delete-channel.component'
import { DeleteChannelMemberComponent } from './delete-channel-member/delete-channel-member.component'
import { AddChannelMembersComponent } from './add-channel-members/add-channel-members.component'

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'group', component: GroupComponent },
  { path: 'userslist', component: UserslistComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'addgroup/:id', component: AddgroupComponent },
  { path: 'addgroup', component: AddgroupComponent },
  { path: 'list/:id', component: UserslistComponent },
  { path: 'groupList', component: GroupMembersListComponent },
  { path: 'groupList/:id', component: GroupMembersListComponent },
  { path: 'createChannel/:id', component: CreateChannelComponent },
  { path: 'deleteChannel/:id', component: DeleteChannelComponent },
  { path: 'deleteChannelMember/:id', component: DeleteChannelMemberComponent },
  { path: 'addChannelMember/:id', component: AddChannelMembersComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
