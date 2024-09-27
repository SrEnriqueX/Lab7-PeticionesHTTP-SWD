import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostApiComponent } from './get-post-api.component';

describe('GetPostApiComponent', () => {
  let component: GetPostApiComponent;
  let fixture: ComponentFixture<GetPostApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPostApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPostApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
