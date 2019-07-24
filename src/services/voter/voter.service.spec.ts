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
    }

    voterService.deleteVoter(3, <ISession> session, 'diego');

    expect(session.voters.length).toBe(1);
    expect(session.voters[0]).toBe('juan');
  });
});
