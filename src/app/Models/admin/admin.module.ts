import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AdminModule {

}

export interface AdminModel {
  adminName: string;
  adminPassword: string;
}
