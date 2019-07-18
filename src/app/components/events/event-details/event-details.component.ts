import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from 'src/app/models/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.event = this.eventService.getEventById(parseInt(params.id));
      this.addMode = false;
    })
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => session.id));
    session.id = maxId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
