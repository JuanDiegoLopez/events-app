import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  EventsListComponent,
  EventComponent,
  EventDetailsComponent,
  EventCreateComponent
} from './components/events';

import { SessionCreateComponent, SessionListComponent, UpvoteComponent } from './components/sessions';

import { NavbarComponent } from './components/navbar/navbar.component';
import { Erro404Component } from './components/errors/404.component';
import { CollapsibleWellComponent } from './components/common/collapsible-well/collapsible-well.component';

import { DurationPipe } from './pipes/duration.pipe';

import {
  EventService,
  TOASTR_TOKEN,
  EventRouteActivator,
  EventListResolver,
  checkDirtyState,
  JQ_TOKEN
} from 'src/services/index';

import { routes } from './routes';
import { AuthService } from 'src/services/auth.service';
import { AuthGuardService } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './components/common/modal/modal.component';
import { ModalTriggerDirective } from './directives/modal-trigger.directive';

import * as toastr from 'toastr';

let $ = window['jQuery'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventCreateComponent,
    Erro404Component,
    SessionCreateComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    ModalComponent,
    UpvoteComponent,
    DurationPipe,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: $ },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    AuthGuardService,
    {
      provide: 'canDeactiveCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
