import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableDataService } from 'ngsw-components';


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

  constructor(private httpClient: HttpClient, private tableDataService: TableDataService) { }
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
}
