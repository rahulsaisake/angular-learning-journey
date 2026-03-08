import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-element',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-element.html',
  styleUrl: './add-element.css',
})
export class AddElement {
itemValue:string="";
items:any=[];

  addItem(rahul:any){
    this.items.push({
     item:rahul.value
    });
  }
}
