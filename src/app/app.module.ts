import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './AllComponents/header/header.component';
import { FooterComponent } from './AllComponents/footer/footer.component';
import { HomeComponent } from './AllComponents/home/home.component';
import { PageNotFoundComponent } from './AllComponents/page-not-found/page-not-found.component';
import { MedicineHomeComponent } from './AllComponents/medicine-home/medicine-home.component';
import { RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from "./AllComponents/top-deals/top-deals.component";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule} from '@angular/forms';
import { ViewProductDetailsComponent } from './AllComponents/view-product-details/view-product-details.component';
import { ViewProductDetailCategoryComponent } from './AllComponents/view-product-detail-category/view-product-detail-category.component';

// import { LoginModule } from './login/login.module';
import { LoginModule} from "./login/login.module";
import { AboutUsComponent } from './AllComponents/about-us/about-us.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        MedicineHomeComponent,
        TopDealsComponent,
        ViewProductDetailsComponent,
        ViewProductDetailCategoryComponent,
        AboutUsComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        FormsModule,
        LoginModule,
    ]
})
export class AppModule { }
