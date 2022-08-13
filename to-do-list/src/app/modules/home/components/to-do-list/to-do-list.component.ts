import {Component, DoCheck, OnInit} from '@angular/core';
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {


  public toDoList: Array<TaskList> = JSON.parse(localStorage.getItem("toDoList") || '[]');


  constructor() { }


  ngDoCheck(){
    this.toDoList.sort( (first, last) => {
      return Number(first.done) - Number(last.done);
    })
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList))
  }


  public deleteToDoItem(index: number){
    this.toDoList.splice(index,1)
  }

  public deleteAllList(){
    const confirm = window.confirm("Deseja realmente apagar tudo?")
    if (confirm){
      this.toDoList = []
    }

  }

  public deleteEmptyField(field:string,index:number) {
    if (!field.length){
      const confirm = window.confirm("Deseja apagar task?")
      if (confirm){
        this.deleteToDoItem(index)
      }
    }

  }

}
