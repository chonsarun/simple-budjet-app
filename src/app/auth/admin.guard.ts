import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

export const adminGuard = (next: ActivatedRouteSnapshot) => {
  const loggedInUser = inject(AuthService).getLoggedInUser();
  return loggedInUser?.user.role === 'A'
    ? true
    : createUrlTreeFromSnapshot(next, ['/auth', 'login']);
};
