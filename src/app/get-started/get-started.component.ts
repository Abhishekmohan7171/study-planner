import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  template: `
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-secondary-dark">
  <div class="bg-dark-bg p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Get Started with Your Study Plan</h2>
    <p class="text-gray-400 text-center mb-8">Plan your studies, track your progress, and achieve your learning goals with ease.</p>
    <form [formGroup]="getStartedForm" (ngSubmit)="onSubmit()">
    <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Plan Name</label>
        <input formControlName="planName" type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Plan Name">
        <!-- <div *ngIf="getStartedForm.get('subjects').invalid && getStartedForm.get('subjects').touched" class="text-red-500 text-sm mt-1">Subjects are required</div> -->
      </div>
      <!-- Subjects Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Subjects</label>
        <select formControlName="subjects" type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter the subjects">
          @for(sub of availableSubjects;track sub){
            <option [value]="sub">{{ sub }}</option>

          }
        </select>
        <!-- <div *ngIf="getStartedForm.get('subjects').invalid && getStartedForm.get('subjects').touched" class="text-red-500 text-sm mt-1">Subjects are required</div> -->
      </div>
      <!-- Current Level Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Current Level</label>
        <input formControlName="currentLevel" type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g., Beginner, Intermediate, Advanced">
        <!-- <div *ngIf="getStartedForm.get('currentLevel').invalid && getStartedForm.get('currentLevel').touched" class="text-red-500 text-sm mt-1">Current Level is required</div> -->
      </div>
      <!-- Learning Goals Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Learning Goals</label>
        <textarea formControlName="learningGoals" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Describe your learning goals"></textarea>
        <!-- <div *ngIf="getStartedForm.get('learningGoals').invalid && getStartedForm.get('learningGoals').touched" class="text-red-500 text-sm mt-1">Learning Goals are required</div> -->
      </div>
      <!-- Available Study Hours Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Available Study Hours</label>
        <input formControlName="studyHours" type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g., 2 hours/day">
        <!-- <div *ngIf="getStartedForm.get('studyHours').invalid && getStartedForm.get('studyHours').touched" class="text-red-500 text-sm mt-1">Study Hours are required</div> -->
      </div>

      <!-- Submit Button -->
      <button type="submit" class="w-full py-3 bg-blue-600 disabled:bg-blue-300 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" [disabled]="getStartedForm.invalid">Get Started</button>
    </form>
  </div>
</div>

`,
  styles: ``
})
export class GetStartedComponent {
  getStartedForm!: FormGroup;
  availableSubjects: string[] = [
    'Mathematics',
    'Science',
    'History',
    'English',
    'Computer Science',
    'Biology',
    'Chemistry',
    'Physics',
    'Geography',
    'Economics',
    'Literature',
    'Music',
    'Art',
    'Physical Education',
    'Philosophy',
    'Psychology'
  ];
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getStartedForm = this.fb.group({
      planName:['',[Validators.required]],
      subjects: ['', [Validators.required]],
      currentLevel: ['', [Validators.required]],
      learningGoals: ['', [Validators.required]],
      studyHours: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
      const formData = this.getStartedForm.value;
      console.log('Form Data:', formData);
      this.router.navigate(['dashboard']);
  }

}
