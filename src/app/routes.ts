import { Routes } from '@angular/router';
import { EventsListComponent, EventDetailsComponent, EventCreateComponent } from './components/events';
import { SessionCreateComponent } from './components/sessions';

import { Erro404Component } from './components/errors/404.component';
import { EventRouteActivator, EventListResolver } from 'src/services/index';

export const routes:Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactiveCreateEvent']},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: SessionCreateComponent},
  { path: '404', component: Erro404Component },
  { path: 'user', loadChildren: './components/user/user.module#UserModule' }
];
