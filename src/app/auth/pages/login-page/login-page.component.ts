import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private authService = inject(AuthService)

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });


  login(){

    const {email, password} = this.loginForm.value;
    this.authService.login(email, password)
      .subscribe({
        next: () => console.log('todo ok!'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }
}
