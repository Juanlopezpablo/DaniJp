import { ComponentFixture, TestBed } from '@angular/core/testing';
import { crearuserpage } from './crearuser.page';

describe('CrearuserPage', () => {
  let component: crearuserpage;
  let fixture: ComponentFixture<crearuserpage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(crearuserpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
