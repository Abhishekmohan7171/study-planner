import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-secondary-dark">
  <div class="bg-dark-bg p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h2 class="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-300">Email Address</label>
        <input type="email" formControlName="email" class="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email">
      </div>
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300">Password</label>
        <input type="password" formControlName="password" class="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password">
      </div>
      <button type="submit" class="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" [disabled]="loginForm.invalid">Login</button>
    </form>
    <p class="mt-6 text-center text-gray-400">Don't have an account? <a href="#" class="text-blue-500 hover:underline">Sign up</a></p>
  </div>
</div>
  `,
  styles:``
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)

      // Handle login logic here, e.g., call an authentication service
    }
  }

}
