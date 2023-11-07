import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './components/dog/dog.component';
import { DogRoutingModule } from './dog-routing.module';



@NgModule({
  declarations: [
    DogComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule
  ]
})
export class DogsModule { }
