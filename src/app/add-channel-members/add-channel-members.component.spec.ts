import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChannelMembersComponent } from './add-channel-members.component';

describe('AddChannelMembersComponent', () => {
  let component: AddChannelMembersComponent;
  let fixture: ComponentFixture<AddChannelMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChannelMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChannelMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
