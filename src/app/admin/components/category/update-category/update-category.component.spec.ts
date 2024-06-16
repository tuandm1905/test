import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoryComponent } from './update-category.component';

describe('UpdateProductComponent', () => {
  let component: UpdateCategoryComponent;
  let fixture: ComponentFixture<UpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
