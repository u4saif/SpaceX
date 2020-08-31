import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTileComponent } from './component-tile.component';

describe('ComponentTileComponent', () => {
  let component: ComponentTileComponent;
  let fixture: ComponentFixture<ComponentTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
