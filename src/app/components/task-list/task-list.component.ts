import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from '../models/interfaces/ITask.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  // TODO reformular com una lista tarea

  tarea1: ITask = {
    title: 'w',
    description: 'w',
    completed:false,
    level: Levels.Info

  }
  tarea2: ITask = {
    title: 'd',
    description: 'd',
    completed:true,
    level: Levels.Urgent

  }


  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(task: ITask){
    // TODO sustituir po un splice 
    alert(`se procede a eliminar la tarea: ${task.title}`)
  }

}
