import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclairageComponent } from './eclairage.component';

describe('EclairageComponent', () => {
  let component: EclairageComponent;
  let fixture: ComponentFixture<EclairageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclairageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EclairageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
