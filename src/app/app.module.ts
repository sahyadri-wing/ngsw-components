import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
// import { DynamicTableModule, MaterialModule } from '../../dist/ngsw-components';

import { DynamicTableModule, MaterialModule } from 'ngsw-components';
import { NgswSearchTableModule } from 'ngsw-search-table';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DynamicTableModule.forRoot(),
    NgswSearchTableModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
