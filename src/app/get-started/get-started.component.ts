import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [ReactiveFormsModule],
  template:`
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-secondary-dark">
  <div class="bg-dark-bg p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Get Started with Your Study Plan</h2>
    <p class="text-gray-400 text-center mb-8">Plan your studies, track your progress, and achieve your learning goals with ease.</p>
    <form  [formGroup]="onboardingForm" (ngSubmit)="onSubmit()">
      <!-- Subjects Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Subjects</label>
        <select type="select" formControlName="subjects" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" >
          @for(subject of availableSubjects;track subject){
            <option [value]="subject">{{ subject }}</option>
          }
        </select>
      </div>
      <!-- Current Level Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Current Level</label>
        <input type="text" formControlName="currentLevel"  class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g., Beginner, Intermediate, Advanced">
      </div>
      <!-- Learning Goals Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Learning Goals</label>
        <textarea formControlName="goals"  class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Describe your learning goals"></textarea>
      </div>
      <!-- Available Study Hours Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Available Study Hours</label>
        <input formControlName="availability"  type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g., 2 hours/day">
      </div>
      <!-- Preferred Learning Style Radio Buttons -->
      <!-- <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-4">Preferred Learning Style</label>
        <div class="flex items-center space-x-4">
          <label class="text-gray-300">
            <input type="radio" name="learning-style" value="visual" class="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Visual
          </label>
          <label class="text-gray-300">
            <input type="radio" name="learning-style" value="auditory" class="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Auditory
          </label>
          <label class="text-gray-300">
            <input type="radio" name="learning-style" value="kinesthetic" class="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Kinesthetic
          </label>
        </div>
      </div> -->
      <!-- Submit Button -->
      <button type="submit" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Get Started</button>
    </form>
  </div>
</div>


  `,
  styles:``
})
export class GetStartedComponent {

  onboardingForm!: FormGroup;
  availableSubjects: string[] = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'English', 'Computer Science'];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.onboardingForm = this.fb.group({
      subjects: [[], Validators.required],
      currentLevel: ['', Validators.required],
      goals: ['', Validators.required],
      availability: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
      const formData = this.onboardingForm.value;
      console.log('Onboarding Data:', formData);
      this.router.navigate(['/dashboard'])
    }
  }
