import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SessionListComponent } from './session-list.component';
import { UpvoteComponent } from '../upvote/upvote.component';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { CollapsibleWellComponent } from '../../common/collapsible-well/collapsible-well.component';
import { AuthService } from 'src/services/auth.service';
import { VoterService } from 'src/services/voter/voter.service';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {
        name: 'Juan'
      }
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      declarations: [SessionListComponent, UpvoteComponent, DurationPipe, CollapsibleWellComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugEl = fixture.debugElement;
  });

  it('initial display', () => {
    component.sessions = [
      { id: 3, name: 'session 1', presenter: 'Juan', duration: 1, level: 'intermediate', voters: ['Diego'], abstract: 'TEST' }
    ];
    component.filterBy = 'all';
    component.sortBy = 'name';
    component.eventId = 4;

    component.ngOnChanges();
    fixture.detectChanges();
    expect(element.querySelector('[well-title]').textContent).toContain('session 1');
    expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('session 1');
  });

});
