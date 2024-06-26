import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthStatus } from '../interfaces';
import { AuthService } from '../services/auth-service';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.authStatus() ===  AuthStatus.authenticated) {
    router.navigateByUrl('./dashboard');
    return false;}

  // if(authService.authStatus() ===  AuthStatus.checking) return false;
  // const url = state.url;
  // localStorage.setItem('url', url)
    return true;
};
