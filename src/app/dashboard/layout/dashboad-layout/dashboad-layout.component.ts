import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service';

@Component({
  selector: 'app-dashboad-layout',
  templateUrl: './dashboad-layout.component.html',
  styleUrl: './dashboad-layout.component.css'
})
export class DashboadLayoutComponent {

  private authService = inject(AuthService);

  public user = computed( () => this.authService.currentUser())

  // get user(){
  //   return this.authService.currentUser;
  // }

  onLogout(){
    this.authService.logout();
  }
}
