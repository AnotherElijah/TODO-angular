import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.component.html',
  styleUrls: ['./create-row.component.scss']
})
export class CreateRowComponent implements OnInit {
  @Output() send:EventEmitter<any> = new EventEmitter();
  header='';
  description='';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.send.emit({header: this.header, description: this.description});
  }

}
