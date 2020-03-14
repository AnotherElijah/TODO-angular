import {Component, OnInit} from '@angular/core';
import {Row} from "../../../schemas/row";
import {DatePipe} from "@angular/common";
import {listState} from "../../../schemas/listState";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  state: listState = {
    rowCreation: false,
    filter: '',
    order: 'minToMax'
  };

  storage: Row[] = [
    {
      header: 'Go to the market',
      description: 'Buy cucumbers, tomato and water',
      deadline: '3/13/20, 19:12',
      status: 'unfinished',
      hour: '19:00',
      id: 1584119548801
    },
    {
      header: 'Congratulate my sister',
      description: 'Last time she said that blue roses are terrible',
      deadline: '3/13/20, 19:12',
      status: 'unfinished',
      hour: '19:00',
      id: 1584119526103
    },
    {
      header: 'Kuhne + Nagel interview',
      description: 'Change my adidas pants on something more appropriate',
      deadline: '3/13/20, 21:02',
      status: 'finished',
      hour: '21:00',
      id: 1584126167131
    },
    {
      header: 'Workout',
      description: 'More workout less rest',
      deadline: '3/13/20, 15:00',
      status: 'finished',
      hour: '15:00',
      id: 1584111600
    },
    {
      header: 'Wake up',
      description: 'Wash face, get coffee',
      deadline: '3/13/20, 10:00',
      status: 'finished',
      hour: '10:00',
      id: 1584093600
    },
  ];
  itemsToPresent: Row[] = [];

  constructor() {
  }

  ngOnInit() {
    this.synchronizeView();
    this.sortItems();
  }

  openList() {
    this.state.rowCreation = !this.state.rowCreation;
  }

  pipe = new DatePipe('en-US');

  dateTimePipe(unix, format:'short'|'H') {
    return format==='short'?
      this.pipe.transform(unix, format)
      :this.pipe.transform(unix, format);
  }

  addData(data) {
    this.storage.push(
      {...data,
        deadline: this.dateTimePipe(data.deadlineUnix,'short'),
        hour: this.dateTimePipe(data.deadlineUnix,'H')+':00',
        status: 'finished',
        id: data.deadlineUnix
      });
    this.state.rowCreation = !this.state.rowCreation;
    this.synchronizeView();
    this.sortItems();
    this.filterItems(this.state.filter);
  }

  removeRow(id) {
    this.storage = this.storage.filter(value => value.id !== id);
    this.synchronizeView();
    this.sortItems();
    this.filterItems(this.state.filter);
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
      this.itemsToPresent = this.itemsToPresent.filter((value) => value.status !== criteria)
    }
  }

  sortItems() {
    const state = this.state;
    this.itemsToPresent.sort(function (a, b) {
      return state.order==='minToMax'?a.id - b.id:b.id-a.id;
    });
  }

  synchronizeView() {
    this.itemsToPresent = JSON.parse(JSON.stringify(this.storage));
  }

  switchOrder(){
    this.state.order = this.state.order==='minToMax'?'maxToMin':'minToMax';
    this.sortItems();
  }
}
