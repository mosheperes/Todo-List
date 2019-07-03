import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  task = {
    name: '',
    id: 0
  };
  tasks = [];

  onClick() {
    if (this.task.id === 0) {
      this.tasks.push({id: (new Date()).getTime(), name: this.task.name});
    }

    this.task = {
      name: '',
      id: 0
    };
  }

  onEdit(item) {
    this.task = item;
  }

  onDelete(item) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (item.id === this.tasks[i].id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
