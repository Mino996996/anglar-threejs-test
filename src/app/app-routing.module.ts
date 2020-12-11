import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcdViewComponent } from './pcd-view/pcd-view.component';
import { TestInterfaceComponent } from './test-interface/test-interface.component';


const routes: Routes = [
  { path: '', component: TestInterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
