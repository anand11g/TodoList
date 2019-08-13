import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  item = '';
  items:string[] = [];

  add():void{
    if(this.item){
     this.items.push(this.item);
     this.item = '';
    }
  }
}
