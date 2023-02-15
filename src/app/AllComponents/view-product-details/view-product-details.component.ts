import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {
productDetails:any; 
deal:any;
  constructor( private route:ActivatedRoute, private http:HttpService, private cart:CartService) { }

  ngOnInit(): void {
    const drugCode= this.route.snapshot.paramMap.get('drug-code');
    if(drugCode != null){
      this.getProductDetailsByDrugCode(drugCode);
    }
  }
  getProductDetailsByDrugCode(drug_code:string){
    const params:HttpParams=new HttpParams()
    .set('drugCode',drug_code)
this.http.getDetailsfromServer('top-deals',params).subscribe((response:any)=>{
  if(response && response.length > 0){
   this.productDetails=response[0];
  //  console.log(this.productDetails);
   
  }
})
  }

  addToCart(product:any){
    this.cart.addSelectItemToCart(product);
   }

}
