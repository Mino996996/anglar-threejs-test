import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular common
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

//Components
import { AppComponent } from './app.component';
import { PcdViewComponent } from './pcd-view/pcd-view.component';
import { TestInterfaceComponent } from './test-interface/test-interface.component';
import { RecogParamsComponent } from './recog-params/recog-params.component';
import { CameraParamsComponent } from './camera-params/camera-params.component';


@NgModule({
  declarations: [
    AppComponent,
    PcdViewComponent,
    TestInterfaceComponent,
    RecogParamsComponent,
    CameraParamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
