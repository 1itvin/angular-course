import { catchError, of, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { InputComponent } from '../../../shared/custom-forms/input/input.component';

@Component({
  selector: 'app-login',
  imports: [
    // components
    InputComponent,

    // modules
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public handleValue(): void {
    console.log(this.form.value);

    const email = this.form.controls['email'].value;
    const password = this.form.controls['password'].value;

    this.authService
      .login(email!, password!)
      .pipe(
        tap(() => {
          this.router.navigate(['/home']);
        }),
        catchError((error) => {
          alert('Bad credentials');
          console.log('error: ', error);
          return of(null);
        })
      )
      .subscribe();
  }
}
