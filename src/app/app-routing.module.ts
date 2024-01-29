import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./components/member/member.component";
import {CompetitionComponent} from "./components/competition/competition.component";

const routes: Routes = [
  {path:'members', component: MemberComponent},
  {path:'competitions', component: CompetitionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
