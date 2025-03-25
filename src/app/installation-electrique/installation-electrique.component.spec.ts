import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationElectriqueComponent } from './installation-electrique.component';

describe('InstallationElectriqueComponent', () => {
  let component: InstallationElectriqueComponent;
  let fixture: ComponentFixture<InstallationElectriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationElectriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationElectriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
