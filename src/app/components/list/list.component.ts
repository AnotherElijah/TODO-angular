import {Component, OnInit} from '@angular/core';
import {Row} from "../../../schemas/row";
import {DatePipe} from "@angular/common";

interface state {
  rowCreation: boolean;
  filter: 'finished' | 'unfinished' | ''
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  state: state = {
    rowCreation: false,
    filter: ''
  };

  storage: Row[] = [

    {
      header: 'string1',
      description: 'str1',
      created: 'string',
      status: 'unfinished',
      id: 1
    },
    {
      header: 'string3',
      description: 'str3',
      created: 'string',
      status: 'unfinished',
      id: 3
    },
    {
      header: 'string2',
      description: 'str2',
      created: 'string',
      status: 'finished',
      id: 2
    },
    {
      header: 'string0',
      description: 'str0',
      created: 'string',
      status: 'finished',
      id: 0
    },
  ];
  itemsToPresent: Row[] = [];

  pipe = new DatePipe('en-US');

  constructor() {
  }

  ngOnInit() {
    this.synchronizeView();
    this.sortItems();
  }

  openList() {
    this.state.rowCreation = !this.state.rowCreation;
  }

  currentDate() {
    const time = Date.now();
    return this.pipe.transform(time, 'short');
  }

  addData(data) {
    this.storage.push({...data, created: this.currentDate(), status: 'finished', id: Date.now()});
    this.state.rowCreation = !this.state.rowCreation;
    this.synchronizeView();
    this.sortItems();
    this.filterItems(this.state.filter);
  }

  removeRow(id) {
    this.storage = this.storage.filter(value => value.id !== id);
    this.synchronizeView()
  }

  changeStatus(id) {
    this.storage.map(item => {
      if (item.id === id) {
        item.status = item.status === 'finished' ? 'unfinished' : 'finished';
      }
    });
    this.synchronizeView();
    this.sortItems();

  }

  manageFilter(criteria) {
    this.toggleFilter(criteria);
    this.filterItems(this.state.filter)
  }

  toggleFilter(criteria: 'finished' | 'unfinished') {
    this.state.filter = this.state.filter === criteria ? '' : criteria;
  }

  filterItems(criteria: 'finished' | 'unfinished' | '') {
    this.synchronizeView();
    this.sortItems();
    if (criteria !== '') {
      this.itemsToPresent = this.itemsToPresent.filter((value) => value.status === criteria)
    }
  }

  sortItems() {
    this.itemsToPresent.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  synchronizeView() {
    this.itemsToPresent = JSON.parse(JSON.stringify(this.storage));
  }
}
