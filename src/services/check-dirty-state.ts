import { EventCreateComponent } from 'src/app/components/events/event-create/event-create.component';

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return window.confirm('You not have save the event, do you really want to leave the page?');
  }
  return true;
}
