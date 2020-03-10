import {Component, OnInit} from '@angular/core';
import {Row} from "../../../schemas/row";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  state = {
    rowCreation: false
  };
  storage:Row[] = [
      {
        header: 'Visit grandma',
        description: 'Visit granmother and give her pills',
        created: '',
        active: false
      },
    {
      header: 'Find a job',
      description: 'Go to mcdonalds and then buy a BMW',
      created: '',
      active: true
    },
    {
      header: 'Eat something',
      description: 'Then drink something',
      created: '',
      active: true
    }];

  constructor() {
  }

  ngOnInit() {
  }

  openList() {
    this.state.rowCreation = !this.state.rowCreation;
  }
}
