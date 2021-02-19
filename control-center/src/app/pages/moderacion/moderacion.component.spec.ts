import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeracionComponent } from './moderacion.component';

describe('ModeracionComponent', () => {
  let component: ModeracionComponent;
  let fixture: ComponentFixture<ModeracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
