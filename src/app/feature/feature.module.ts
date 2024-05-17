import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    DividerModule
  ]
})
export class FeatureModule { }
