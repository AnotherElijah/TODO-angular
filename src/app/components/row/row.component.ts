import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Row} from "../../../schemas/row";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() rowData: Row;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  removeRow(){
    this.delete.emit(this.rowData.id);
  }

}
