import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent }from './../shared/components/header/header.component';
import { CustomInputComponent }from './../shared/components/custom-input/custom-input.component';
import { LogoComponent }from './../shared/components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent,
                  CustomInputComponent,
                  LogoComponent],
  exports:[HeaderComponent,
           CustomInputComponent,
           ReactiveFormsModule,
           LogoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
