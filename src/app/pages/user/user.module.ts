import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HeaderModule } from '../../theme/header/header.module';
import { FooterModule } from '../../theme/footer/footer.module';
import { InnerHeaderModule } from '../../theme/inner-header/inner-header.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    InnerHeaderModule,
    FooterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
