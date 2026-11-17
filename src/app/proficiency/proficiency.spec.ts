import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Proficiency } from './proficiency';

describe('Proficiency', () => {
  let component: Proficiency;
  let fixture: ComponentFixture<Proficiency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proficiency],
    }).compileComponents();

    fixture = TestBed.createComponent(Proficiency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
