import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from 'src/app/models/event.model';

@Component({
  selector: 'sessions-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  sortSessions(sort: string) {
    if (sort === 'name') {
      this.visibleSessions.sort((s1, s2) => {
        if (s1.name > s2.name) return 1;
        else if (s1.name === s2.name) return 0;
        else return -1;
      })
    } else {
      this.visibleSessions.sort((s1, s2) => {
        return s2.voters.length - s1.voters.length;
      })
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLowerCase() === filter;
      });
    }
  }

  toggleVoted() {

  }

  userHasVoted() {

  }
}
