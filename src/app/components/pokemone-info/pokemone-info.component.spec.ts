import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoneInfoComponent } from './pokemone-info.component';

describe('PokemoneInfoComponent', () => {
  let component: PokemoneInfoComponent;
  let fixture: ComponentFixture<PokemoneInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemoneInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
