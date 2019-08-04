import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ISession } from 'src/app/models/session.interface';
import { EventService } from 'src/services';
import { IEvent } from 'src/app/models/event.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  query = '';
  foundSessions: ISession[];
  events: IEvent[];

  constructor(private authService: AuthService, private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      });
  }

  searchSessions(query: string) {
    this.eventService.searchSession(query)
      .subscribe((sessions: ISession[]) => {
        this.foundSessions = sessions;
      });
  }
}
