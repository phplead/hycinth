import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './theme/header/header.module';
import { FooterModule } from './theme/footer/footer.module';
import { SharedModule } from './shared/shared.module';
import { JwtHelper, HttpHelper } from './helpers';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';
import { InnerHeaderModule } from './theme/inner-header/inner-header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HeaderModule,
    InnerHeaderModule,
    FooterModule,
    SnotifyModule
  ],
  providers: [ JwtHelper, HttpHelper, SnotifyService, { provide: 'SnotifyToastConfig', useValue: ToastDefaults }],
  bootstrap: [AppComponent]
})
export class AppModule { }
