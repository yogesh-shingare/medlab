import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './AllComponents/home/home.component';
import { MedicineHomeComponent } from './AllComponents/medicine-home/medicine-home.component';
import { PageNotFoundComponent } from './AllComponents/page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ViewProductDetailsComponent } from './AllComponents/view-product-details/view-product-details.component';
import { ViewProductDetailCategoryComponent } from './AllComponents/view-product-detail-category/view-product-detail-category.component';
import { AboutUsComponent } from './AllComponents/about-us/about-us.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  {path:'view-product-details/:drug-code',component:ViewProductDetailsComponent},
  {path:'view-by-category', component:ViewProductDetailCategoryComponent},
  {path:'about-us-page',component:AboutUsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
