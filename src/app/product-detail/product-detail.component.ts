import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit(): void {
    //先從current route取得產品id
    const routeParams = this.route.snapshot.paramMap; //route.snapshot 訪問路由引數，包含有關該特定時刻的活動路由資訊
    const productIdFromRoute = Number(routeParams.get('productId')); //取得路徑的productId

    //尋找和路徑找到的ID號碼一樣的產品
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
