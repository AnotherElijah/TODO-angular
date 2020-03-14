import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.component.html',
  styleUrls: ['./create-row.component.scss']
})
export class CreateRowComponent implements OnInit {
  @Output() send: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  header = '';
  description = '';
  deadline = '';

  constructor() {
  }

  toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.send.emit({header: this.header, description: this.description, deadlineUnix: this.toTimestamp(this.deadline)});
  }

}
