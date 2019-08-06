import { NgModule } from '@angular/core';
import { NgswComponentsComponent } from './ngsw-components.component';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';



@NgModule({
  declarations: [NgswComponentsComponent],
  imports: [
    DynamicTableModule
  ],
  exports: [NgswComponentsComponent, DynamicTableModule]
})
export class NgswComponentsModule { }
