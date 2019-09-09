import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgswSearchTableService, ColumnSearch } from 'ngsw-search-table';
// import { TableDataService } from 'ngsw-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-components';
  dataTable;
  actionButtons = [];
  totalTableElements;
  searchValue = {}
  constructor(private httpClient: HttpClient, private tableDataService: NgswSearchTableService) { }
  ngOnInit(): void {
    this.actionButtons.push(this.tableDataService.addActionButton('view', 'visibility', 'view'));
    this.actionButtons.push(this.tableDataService.addActionButton('Edit', 'edit', 'Edit'));
    this.getTableData().subscribe(res => {
      console.log('res', res);

      this.dataTable = this.tableDataService.convertIntoDataTable(res['response']);
      console.log('this.dataTable', this.dataTable);
      this.totalTableElements = 131;

    })
  }
  getTableData() {
    return this.httpClient.get(`./assets/row_jsons/addFunctionality.json`)
  }
  test(ent, searchColumnName) {
    console.log('ent', ent);
    const date: Date = ent.value as Date
    // this.searchValue = {
    //   searchValue: '1',
    //   searchColumnName
    // };

    const searchValue = {
      searchValue: date.getDate() + '-' + (((date.getMonth() + 1) < 10) ? `0${ (date.getMonth() + 1) }` : (date.getMonth() + 1)) + '-' + date.getFullYear(),
      searchColumnName
    };

    this.searchValue = new ColumnSearch(searchValue.searchValue, searchValue.searchColumnName);

    // 12-08-2019 11:45:30
  }
}
