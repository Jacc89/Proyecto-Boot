import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBasicComponent } from './list-basic/list-basic.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    ListBasicComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ListBasicComponent
  ]
})
export class ListsModule { }
