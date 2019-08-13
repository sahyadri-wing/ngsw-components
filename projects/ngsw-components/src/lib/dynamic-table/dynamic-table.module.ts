import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { CamelCaseToRegularStringPipe } from './pipe/camel-case-to-regular-string.pipe';
import { GetKeyValueFromObjectPipe } from './pipe/get-key-value-from-object.pipe';
// import { NotificationModule } from './../../notificationModule/notification.module';
// import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatDatepickerModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableDataService } from './table-data.service';
import { SearchFieldDirective } from './directives/search-field.directive';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [],
})
export class MaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    // NgbPaginationModule,
    // NotificationModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicTableComponent,
    CamelCaseToRegularStringPipe,
    GetKeyValueFromObjectPipe,
    SearchFieldDirective
  ],
  exports: [DynamicTableComponent, CamelCaseToRegularStringPipe, SearchFieldDirective]
})
export class DynamicTableModule {
  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: DynamicTableModule,
      providers: [
        TableDataService
      ]
    };
  }

}
