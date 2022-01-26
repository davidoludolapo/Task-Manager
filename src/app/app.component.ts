import { Component } from '@angular/core';
import { StudentInterface } from './type/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'first-class'

 
 public name:string = ''
 public department:string = ''
 public level?:number; 
 public matNumber?:number; 
 public email:string= '';
 public allStudents:Array<StudentInterface>=[];
 public editData:boolean= false;
 public editedIndex:number= 0
 

 addStudent() {
   let {name,department,level,matNumber,email} = this
   this.allStudents.push({name,department,level,matNumber,email})
   console.log(this.allStudents)
   this.name =''
   this.department =''
   this.level = undefined 
   this.matNumber=undefined;
   this.email =''
 }

 deleteStudent(i:number){
   this.allStudents =this.allStudents.filter((_,index)=>index!==i)
   
 }

 editStudent(i:number){
  this.editData = true;
  this.editedIndex= i;

  let editedObject = this.allStudents[i]
  this.name = editedObject.name
  this.department = editedObject.department
  this.level = editedObject.level
  this.matNumber = editedObject.matNumber
  this.email = editedObject.email
 }

 saveChanges() {
  let {name,department,level,matNumber,email, editedIndex} = this
  let editedObject = {name,department,level,matNumber,email}
  this.allStudents[editedIndex] = editedObject
  this.editData =false
  
  this.name= ''
  this.department =''
  this.level = undefined
  this.matNumber = undefined
  this.email = ''

 }

}
