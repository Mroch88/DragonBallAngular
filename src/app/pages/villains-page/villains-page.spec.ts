import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsPage } from './villains-page';

describe('VillainsPage', () => {
  let component: VillainsPage;
  let fixture: ComponentFixture<VillainsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillainsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VillainsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
