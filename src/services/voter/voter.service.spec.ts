import { VoterService } from './voter.service';
import { of } from 'rxjs';
import { ISession } from 'src/app/models/session.interface';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  it('should remove the voter from the list of the voters', () => {
    mockHttp.delete.and.returnValue(of(false));
    const session = {
      id: 6,
      voters: ['juan', 'diego']
    };

    voterService.deleteVoter(3, session as ISession, 'diego');
    expect(session.voters.length).toBe(1);
    expect(session.voters[0]).toBe('juan');
  });

  it('should call http.delete with the right URL', () => {
    mockHttp.delete.and.returnValue(of(false));
    const session = {
      id: 6,
      voters: ['juan', 'diego']
    };

    voterService.deleteVoter(3, session as ISession, 'diego');
    expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/diego');
  });

  it('should call http.post with the right URL', () => {
    mockHttp.post.and.returnValue(of(false));
    const session = {
      id: 6,
      voters: ['juan']
    };

    voterService.addVoter(3, session as ISession, 'diego');
    expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/diego', {}, jasmine.any(Object));
  });
});
