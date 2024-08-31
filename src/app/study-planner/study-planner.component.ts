import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-study-planner',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <div class="min-h-screen flex flex-col justify-center bg-gradient-to-br from-primary-dark to-secondary-dark">
  <header class="px-8 py-4 flex justify-between items-center">
    <h1 class="text-3xl font-bold text-white">Study Planner</h1>
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-300 hover:text-white">Features</a></li>
        <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
        <li><a href="/login" class="text-gray-300 hover:text-white">Login</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex-grow flex items-center justify-center text-center px-4">
    <div>
      <h2 class="text-4xl md:text-6xl font-bold text-white leading-tight">Welcome to Your Personalized Study Planner</h2>
      <p class="mt-6 text-gray-400 text-lg md:text-xl">Plan your studies, track your progress, and achieve your learning goals.</p>
      <div class="mt-8 space-x-4">
        <a href="/get-started" class="inline-block py-3 px-8 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Get Started</a>
      </div>
    </div>
  </main>

  <footer class="py-4 bg-dark-bg text-center">
    <p class="text-gray-500">© 2024 Study Planner. All rights reserved.</p>
  </footer>
</div>

  `,
  styles:``
})
export class StudyPlannerComponent {

}
