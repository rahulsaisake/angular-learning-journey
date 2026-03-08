import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../login/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  //properties
  url:string='www.rahulsai.com';
  firstName:string='Rahulsai';
  lastName:string='sake';
  age:number=25;
  pathofImage:string="./bird.jpg"
  //meathods
  action1(){
  window.alert("Hello Event binding working...!")
  }
  action2(){
    this.firstName='Vamsi'
    this.lastName='Krishna'
    this.age=40;
    this.pathofImage="./owl.jpg"
  }
}

