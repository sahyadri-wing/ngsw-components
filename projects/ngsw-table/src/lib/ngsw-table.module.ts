import { NgModule } from '@angular/core';
import { NgswTableComponent } from './ngsw-table.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [NgswTableComponent, TestComponent],
  imports: [
  ],
  exports: [NgswTableComponent]
})
export class NgswTableModule { }
