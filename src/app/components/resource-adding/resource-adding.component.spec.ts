import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAddingComponent } from './resource-adding.component';

describe('ResourceAddingComponent', () => {
  let component: ResourceAddingComponent;
  let fixture: ComponentFixture<ResourceAddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceAddingComponent]
    });
    fixture = TestBed.createComponent(ResourceAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
