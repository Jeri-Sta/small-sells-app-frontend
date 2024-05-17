import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class SharedModule { }
