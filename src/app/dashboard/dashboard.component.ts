import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  template: `
  <div class="min-h-screen bg-gradient-to-br from-primary-dark to-secondary-dark text-white">
  <div class="container mx-auto p-6">

    <!-- Dashboard Heading -->
    <h1 class="text-4xl font-bold mb-8">Dashboard</h1>

    <!-- Study Plan Overview -->
    <div class="bg-dark-bg p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">Your Study Plan</h2>
      <p class="text-gray-300 mb-2">Plan Name: {{ studyPlan.name }}</p>
      <p class="text-gray-300 mb-2">Subjects: {{ studyPlan.subjects.join(', ') }}</p>
      <p class="text-gray-300 mb-2">Duration: {{ studyPlan.duration }}</p>
      <p class="text-gray-300">Time Left: 2 months</p>
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

    <!-- AI-Generated Insights -->
    <div class="bg-dark-bg p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">AI-Generated Study Tip</h2>
      <p class="text-gray-300" *ngIf="aiResponse">{{ aiResponse }}</p>
      <p class="text-gray-300" *ngIf="!aiResponse">Fetching your personalized tip...</p>
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
        <a href="/take-quiz" class="w-full py-3 bg-gray-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-gray-700" href="/quiz">Take a Quiz</a>
      </div>
    </div>

  </div>
</div>

  `,
  styles: ``
})
export class DashboardComponent {
  studyPlan: any;
  progress: any;
  recommendations: any[] = [];
  aiResponse: string = '';

  timeLeft: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simulated Data
    this.studyPlan = {
      name: 'My Study Plan',
      subjects: ['Math', 'Science', 'History'],
      duration: '2 weeks'
    };

    this.progress = {
      completed: 5,
      total: 10
    };

    this.recommendations = [
      { title: 'Calculus Made Easy', type: 'Book', link: '#' },
      { title: 'Introduction to Chemistry', type: 'Video', link: '#' },
      { title: 'World History 101', type: 'Article', link: '#' }
    ];

    // Fetch AI Response
    this.getAIResponse();
  }



  getAIResponse(): void {
    const prompt = "Give a personalized study tip based on the following progress: " +
      `Subjects: ${this.studyPlan.subjects.join(', ')}. ` +
      `Progress: ${this.progress.completed}/${this.progress.total}.`;

    const apiKey = "" //add the api keuy before running

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that generates quiz questions.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 1500,
      temperature: 0.7
    };

    this.http.post<any>('https://api.openai.com/v1/chat/completions', body, { headers })
      .subscribe(response => {
        this.aiResponse = response.choices[0].message.content.trim().split('\n').filter((q: any) => q.trim() !== '');
        // console.log(this.aiResponse)
      }, error => {
        console.error('Error with OpenAI API', error);
      });
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

}
