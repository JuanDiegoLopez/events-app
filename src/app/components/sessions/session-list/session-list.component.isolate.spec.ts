import { SessionListComponent } from './session-list.component';
import { AuthService } from 'src/services/auth.service';
import { VoterService } from 'src/services/voter/voter.service';
import { ISession } from 'src/app/models/session.interface';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  const mockAuthService: AuthService;
  const mockVoterService: VoterService;


  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should sort the sessions correctly by name', () => {
      component.eventId = 3;
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.sessions = [
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 1', level: 'beginner' },
        { name: 'session 3', level: 'intermediate' }
      ] as ISession[];

      component.ngOnChanges();
      expect(component.visibleSessions[0].name).toBe('session 1');
    });

    it('should sort the sessions correctly by level', () => {
      component.eventId = 3;
      component.filterBy = 'beginner';
      component.sortBy = 'name';
      component.sessions = [
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 1', level: 'beginner' },
        { name: 'session 3', level: 'intermediate' }
      ] as ISession[];

      component.ngOnChanges();
      expect(component.visibleSessions.length).toBe(1);
    });
  });

});
