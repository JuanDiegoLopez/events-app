import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISesssion } from 'src/app/models/event.model';

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
    this.event = this.eventService.getEventById(parseInt(this.activateRoute.snapshot.params.id));
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISesssion) {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => session.id));
    session.id = maxId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
