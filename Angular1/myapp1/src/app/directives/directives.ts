import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  names:string[]=["rahul","vamsi","sai"]
  object:any={
    "id":101,
    "name":"rahul",
    "salary":20000
  }
  myColor:string="";
  myClass:string="";


  action1():void{
    alert("Working...from line 1!")
    this.myColor="red";
    this.myClass="classA";
    
  }
  action2():void{
    alert("Working...from line 2!")
    this.myColor="blue";
     this.myClass="classB";
  }
  

}
