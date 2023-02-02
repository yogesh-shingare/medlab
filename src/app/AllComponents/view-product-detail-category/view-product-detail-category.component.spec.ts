import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetailCategoryComponent } from './view-product-detail-category.component';

describe('ViewProductDetailCategoryComponent', () => {
  let component: ViewProductDetailCategoryComponent;
  let fixture: ComponentFixture<ViewProductDetailCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDetailCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductDetailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
