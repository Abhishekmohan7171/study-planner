import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template:`
    <div class="min-h-screen bg-gradient-to-br from-primary-dark to-secondary-dark text-white">
  <div class="container mx-auto p-6">

    <!-- Dashboard Heading -->
    <h1 class="text-4xl font-bold mb-8">Dashboard</h1>

    <!-- Study Plan Overview -->
    <div class="bg-dark-bg p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">Your Study Plan</h2>
      <p class="text-gray-300 mb-2">Plan Name: {{ studyPlan.name }}</p>
      <p class="text-gray-300 mb-2">Subjects: {{ studyPlan.subjects.join(', ') }}</p>
      <p class="text-gray-300">Duration: {{ studyPlan.duration }}</p>
    </div>

    <!-- Progress Tracking -->
    <div class="bg-dark-bg p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">Your Progress</h2>
      <div class="flex items-center">
        <p class="text-gray-300 mr-4">Completed: {{ progress.completed }}/{{ progress.total }}</p>
        <div class="flex-1 bg-gray-800 h-4 rounded-lg overflow-hidden">
          <div class="bg-blue-600 h-full" [style.width.%]="(progress.completed / progress.total) * 100"></div>
        </div>
      </div>
    </div>

    <!-- Recommended Resources -->
    <div class="bg-dark-bg p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">Recommended Resources</h2>
      <ul>
        <li *ngFor="let recommendation of recommendations; trackBy: trackByFn" class="mb-4">
          <a [href]="recommendation.link" class="text-blue-400 hover:underline">
            {{ recommendation.title }} <span class="text-gray-400">({{ recommendation.type }})</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Quick Actions -->
    <div class="bg-dark-bg p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Quick Actions</h2>
      <div class="flex space-x-4">
        <a href="/edit-plan" class="w-full py-3 bg-blue-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-blue-700">Edit Plan</a>
        <a href="/take-quiz" class="w-full py-3 bg-gray-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-gray-700">Take a Quiz</a>
      </div>
    </div>

  </div>
</div>

  `
  ,
  styles:``
})
export class DashboardComponent {
  studyPlan: any;
  progress: any;
  recommendations: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    // Fetch user study plan data (Replace with actual service calls)
    this.studyPlan = {
      name: 'My Study Plan',
      subjects: ['Math', 'Science', 'History'],
      duration: '2 weeks'
    };

    // Fetch user progress data (Replace with actual service calls)
    this.progress = {
      completed: 5,
      total: 10
    };

    // Fetch AI recommendations (Replace with actual service calls)
    this.recommendations = [
      { title: 'Calculus Made Easy', type: 'Book', link: '#' },
      { title: 'Introduction to Chemistry', type: 'Video', link: '#' },
      { title: 'World History 101', type: 'Article', link: '#' }
    ];
  }

  trackByFn(index: number, item: any): number {
    return index; // or item.id, depending on your data model
  }
}
