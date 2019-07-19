import { Injectable } from '@angular/core';

import { EventService } from './event.service';
import { ISession } from 'src/app/models/session.interface';

@Injectable()
export class VoterService {

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.includes(voterName);
  }
}
