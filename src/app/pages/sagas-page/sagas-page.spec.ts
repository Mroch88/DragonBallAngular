import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasPage } from './sagas-page';

describe('SagasPage', () => {
  let component: SagasPage;
  let fixture: ComponentFixture<SagasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagasPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SagasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
