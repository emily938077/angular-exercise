import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent implements OnInit {
  @Input() product!: Product; //
  @Output() notify = new EventEmitter(); //EventEmitter 監聽使用 搭配emit()在html使用
  constructor() {}

  ngOnInit(): void {}
}
