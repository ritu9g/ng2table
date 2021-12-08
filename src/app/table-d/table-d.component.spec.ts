import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDComponent } from './table-d.component';

describe('TableDComponent', () => {
  let component: TableDComponent;
  let fixture: ComponentFixture<TableDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
