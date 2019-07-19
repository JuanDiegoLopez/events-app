import { InjectionToken } from '@angular/core';
import { IToastr } from 'src/app/models/toastr.interface';

export const TOASTR_TOKEN = new InjectionToken<IToastr>('toastr');
