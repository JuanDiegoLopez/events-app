import { Injectable } from '@angular/core';

import { EventService } from '../event.service';
import { ISession } from 'src/app/models/session.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { handleError } from '../handle-error';
import { catchError } from 'rxjs/operators';
import { IEvent } from 'src/app/models/event.interface';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {}

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    this.http.post(url, {}, options)
      .pipe(catchError(handleError('addVoter')))
      .subscribe();
  }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this.http.delete(url)
      .pipe(catchError(handleError('deleteVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.includes(voterName);
  }
}
