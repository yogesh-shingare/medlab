import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-view-product-detail-category',
  templateUrl: './view-product-detail-category.component.html',
  styleUrls: ['./view-product-detail-category.component.scss']
})
export class ViewProductDetailCategoryComponent implements OnInit {
  topDealsByCategory:any;
  constructor(private http:HttpService,private cart:CartService) { }

  ngOnInit(): void {
    this.getTopDealsByCategory()
  }
  getTopDealsByCategory(){
    this.http.getDetailsfromServer('top-deals-by-category').subscribe((response:any)=>{
     if(response && response.length > 0){
       this.topDealsByCategory = response ;
     }
    })

    // addToCart(product:any){
    //   this.cart.addSelectItemToCart(product);
    //  }


  // addToCart(product: any, any: any) {
  //   throw new Error('Function not implemented.');
  // }
}
}
