import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Injectable()
export class DataServiceService {
  newTodo: string;
  todos: any = [];
  filterItems: any =[];
  bFilterApplied = false;
  filterParams: any;

  constructor() {
    let sampleData = [
      { name: "Book ticket for night show", completed: false },
      { name: "Buy vegetables", completed: false }];

    sampleData.forEach(e => this.todos.push(e)); 
    this.filterItems = this.todos.slice(0);
  }

  addTodo(obj: any): void {
    this.todos.push(obj);
    this.filterItems = this.todos.slice(0);
    if(this.bFilterApplied)
    {
      this.filterItem(this.filterParams);
    }
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.filterItems = this.todos.slice(0);
  }

  deleteSelectedTodos(): void {
    //need ES5 to reverse loop in order to splice by index
    for (var i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
        this.filterItems = this.todos.slice(0);
      }
    }
  }

  //Get in completed task count
  getInCompletedLength(): number {
    let inCompleted = this.todos.filter(item => item.completed == false);
    return inCompleted.length;
  }

  getAllTodos(): any {
    return this.filterItems;
  }

  filterItem(param: any) {
    this.filterParams = param;
    if (typeof (param) == 'number') {
      this.bFilterApplied = true;
      let paramDefinition = param == 1 ? true : false;
      this.filterItems = this.todos.filter(e => e.completed == paramDefinition);      
    }
    else {
      this.bFilterApplied = false;
      this.filterItems = this.todos.slice(0);
    }
  }
}
