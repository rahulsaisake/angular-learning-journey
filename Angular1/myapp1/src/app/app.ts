import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { DataBinding } from './data-binding/data-binding';
import { FormsModule } from '@angular/forms';
import { Directives } from './directives/directives';
import { CommonModule } from '@angular/common';
import { StructuralDirective } from './structural-directive/structural-directive';
import { AddElement } from './add-element/add-element';


@Component({
  selector: 'app-root', 
  imports: [DataBinding,FormsModule,Directives,CommonModule,StructuralDirective,AddElement],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('myapp1');
}
