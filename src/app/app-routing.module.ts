import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcdViewComponent } from './pcd-view/pcd-view.component';

const routes: Routes = [
  { path: '', component: PcdViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
