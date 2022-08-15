import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-add-itens',
  templateUrl: './to-do-add-itens.component.html',
  styleUrls: ['./to-do-add-itens.component.scss']
})
export class ToDoAddItensComponent implements OnInit {

  @Output() public enviarToDoItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public send(event: string){
    let task: string = event.trim()
    switch (task) {
      case '':
        break
      default:
        this.enviarToDoItem.emit({task:task, done:false})
        break
    }

  }


}
