import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})
export class StructuralDirective {
  status: boolean = false;
  status1: boolean = false;
  countryName: string = "India";
  countryNames: string[] = ["India", "Usa", "Uk", "Iran", "Irak"]
  country: string = "";
  products = [
    {
      "id": 101,
      "name": "Car",
      "image": "./car.jpg",
      "price": 10000
    },
    {
      "id": 102,
      "name": "Bus",
      "image": "./bus.jpg",
      "price": 20000
    }, {
      "id": 103,
      "name": "Van",
      "image": "./van.jpg",
      "price": 30000
    }, {
      "id": 104,
      "name": "Jeep",
      "image": "./jeep.jpg",
      "price": 40000
    }, {
      "id": 105,
      "name": "Train",
      "image": "./train.jpg",
      "price": 50000
    }
  ];
  //methods
  Asc() {
    this.products.sort((a, b) => a.id - b.id);
  }

  Des() {
    this.products.sort((a, b) => b.id - a.id);
  }
  Del(product: any) {

    alert(product.name + " Successfully deleted")
  }
  Add(product: any) {

    product.price += 10;

  }
}
