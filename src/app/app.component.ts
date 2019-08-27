import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'todos',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent {
  newTodo: string;
  todos: any;
  todoObj: any;
  itemLeft:number=0;
  param:string = 'all'
  

  constructor( private dataService: DataServiceService) {
    this.newTodo = '';    
  }


  addTodo(event:any):void {
    this.todoObj = {
      name: this.newTodo,
      completed: false
    }
    this.dataService.addTodo(this.todoObj);
    this.newTodo = '';    
    event.preventDefault();
  }


  deleteTodo(index:number):void {
    this.dataService.deleteTodo(index);
  }


  deleteSelectedTodos():void {
    this.dataService.deleteSelectedTodos();
  }

  //Get in completed task count
  getInCompletedTodo(){
    return this.dataService.getInCompletedLength();
  }
  
  getAllTodos(): any {
    return this.dataService.getAllTodos();
  }

  filterItem(param:any){
    this.dataService.filterItem(param);
  }
}
