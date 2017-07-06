import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../cars/car';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
@Input() car: Car;
  constructor() { }

  ngOnInit() {
  }

}
