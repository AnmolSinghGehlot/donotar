import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { DonatorsComponent } from './donators/donators.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { MemberComponent } from './member/member.component';
import { NgoMainComponent } from './ngo-main/ngo-main.component';
import { RecipientComponent } from './recipient/recipient.component';

const routes: Routes = [
  { path: 'NgoMain', component: NgoMainComponent },
  { path: 'Home', component: AppComponent },
  { path: 'ListMembers', component: ListMembersComponent },
  { path: 'Donators', component: DonatorsComponent },
  { path: 'Needy', component: RecipientComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Feedback', component: FeedbackComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'Edit/:id', component: EditMemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
