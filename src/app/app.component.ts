import { Component } from '@angular/core';
import {TaskInterface } from './type/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Task Manager'
 isDisabled = false;

 
 public name:string = ''
 public allTasks:Array<TaskInterface>=[];
 public editData:boolean= false;
 public editedIndex:number= 0
 

 addTask(e:any) {
   e.preventDefault()
   let name = this.name
   this.allTasks.push({name})
   this.name= ''
  
 }

 deleteTask(i:number){
   this.allTasks =this.allTasks.filter((_,index)=>index!==i)
   
 }

 editTask(i:number){
  this.editData = true;
  this.editedIndex= i;

  let editedObject = this.allTasks[i]
  this.name = editedObject.name
  
 }

 saveChanges() {
  let {name, editedIndex} = this
  let editedObject = {name}
  this.allTasks[editedIndex] = editedObject
  this.editData =false
  
  this.name= ''
  
 }

}
