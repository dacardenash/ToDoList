import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  
  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = ''; 
  editTaskValue : string = ''; 

  constructor(private crudService : CrudService ) {

  }

  ngOnInit(): void {
    this.getAllTask();
  }

  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = [];
      this.taskArr = res;
      this.addTaskValue = '';
      this.editTaskValue = '';
    }, err => {
      alert("No se puede obtener la lista.");
    });
  }

  addTask() {
    debugger;
    this.taskObj.nameTask = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe((data) => {
      this.getAllTask();
    }, err  => {
      alert(err);
    });
  }

  editTask(){
    this.taskObj.nameTask = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe((res) => {
      this.getAllTask();
    }, err => {
      alert("No se puede editar.");
    });
  }

  deleteTask(task : Task) {
    this.crudService.deleteTask(task).subscribe((res) => {
      this.getAllTask();
    }, err => {
      alert("No se pudo eliminar.");
    });
  }

  call(task: Task) {
    this.taskObj = task; 
    this.editTaskValue = task.nameTask; 
  }
}
