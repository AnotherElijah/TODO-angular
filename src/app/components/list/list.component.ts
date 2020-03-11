import {Component, OnInit} from '@angular/core';
import {Row} from "../../../schemas/row";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  state = {
    rowCreation: false
  };
  storage:Row[] = [];
  pipe = new DatePipe('en-US');
  constructor() {
  }

  ngOnInit() {
  }

  openList() {
    this.state.rowCreation = !this.state.rowCreation;
  }

  currentDate(){
    const time = Date.now();
    return this.pipe.transform(time, 'short');
  }

  saveData(data){
    this.storage.push({...data, created: this.currentDate(), active: true, id: Date.now()});
    this.state.rowCreation = !this.state.rowCreation;
  }

  removeRow(id){
    this.storage = this.storage.filter(value=> value.id !== id)
  }

  changeStatus(id){
    this.storage.map(item=>{
      if(item.id===id){
        item.active = !item.active;
      }
    });
  }
}
