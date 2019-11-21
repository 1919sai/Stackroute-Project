import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricdataComponent } from './cricdata.component';

describe('CricdataComponent', () => {
  let component: CricdataComponent;
  let fixture: ComponentFixture<CricdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
