import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersaddComponent } from './playersadd.component';

describe('PlayersaddComponent', () => {
  let component: PlayersaddComponent;
  let fixture: ComponentFixture<PlayersaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
