import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  // checkoutForm 屬性設定為一個包含 name 和 address 欄位的表單模型
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    //提交後(購買) 購物車內就不會有東西了
    this.items = this.cartService.clearCart();
    console.warn('Your ouder has been submitted', this.checkoutForm.reset());
  }
  ngOnInit(): void {}
}
