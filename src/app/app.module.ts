import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcdViewComponent } from './pcd-view/pcd-view.component';
import { TestInterfaceComponent } from './test-interface/test-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    PcdViewComponent,
    TestInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
