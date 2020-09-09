import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChannelMemberComponent } from './delete-channel-member.component';

describe('DeleteChannelMemberComponent', () => {
  let component: DeleteChannelMemberComponent;
  let fixture: ComponentFixture<DeleteChannelMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteChannelMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChannelMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
