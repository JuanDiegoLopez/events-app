import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IEvent } from 'src/app/models/event.interface';
import { ISession } from 'src/app/models/session.interface';
import { handleError } from './handle-error';

@Injectable()

export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(handleError<IEvent[]>('getEvents', [])));
  }

  getEventById(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(handleError<IEvent>('getEvents')));
  }

  saveEvent(event: IEvent): Observable<IEvent> {
    const options = {headers: new HttpHeaders( {'Content-Type': 'application/json'})};

    return this.http.post<IEvent>('/api/events', event, options)
      .pipe(catchError(handleError<IEvent>('saveEvent')));
  }

  searchSession(query: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(`/api/sessions/search?search=${query}`)
      .pipe(catchError(handleError<ISession[]>('searchSession')));
  }
}
