import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ISession } from 'src/app/models/session.interface';
import { EventService } from 'src/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  query: string = '';
  foundSessions: ISession[];

  constructor(private authService: AuthService, private eventService: EventService) {

  }

  searchSessions(query: string) {
    this.eventService.searchSession(query)
    .subscribe((sessions: ISession[]) => {
      this.foundSessions = sessions;
    });
  }
}
