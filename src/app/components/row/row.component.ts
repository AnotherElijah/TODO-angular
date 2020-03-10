import {Component, Input, OnInit} from '@angular/core';
import {Row} from "../../../schemas/row";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() rowData: Row;
  constructor() {}

  ngOnInit() {
  }

}
