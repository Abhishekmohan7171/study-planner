import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  template: `
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-secondary-dark text-white">
  <div class="bg-dark-bg p-8 rounded-lg shadow-lg w-full max-w-lg">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">AI-Generated Quiz</h2>

    <form [formGroup]="quizForm" (ngSubmit)="generateQuiz()">
      <!-- Subject Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
        <input formControlName="subject" type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter subject">
        <!-- <div *ngIf="quizForm.get('subject').invalid && quizForm.get('subject').touched" class="text-red-500 text-sm mt-1">Subject is required</div> -->
      </div>

      <!-- Number of Questions Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-2">Number of Questions</label>
        <input formControlName="numQuestions" type="number" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter number of questions">
        <!-- <div *ngIf="quizForm.get('numQuestions').invalid && quizForm.get('numQuestions').touched" class="text-red-500 text-sm mt-1">Please enter a number between 1 and 20</div> -->
      </div>

      <!-- Submit Button -->
      <button type="submit" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" [disabled]="quizForm.invalid || isLoading">
        {{ isLoading ? 'Generating...' : 'Generate Quiz' }}
      </button>
    </form>

    <!-- Display Generated Questions -->
    <div *ngIf="questions.length > 0" class="mt-8">
      <h3 class="text-2xl font-bold text-white mb-4">Your Quiz Questions:</h3>
      <ul class="list-disc pl-5 text-gray-300">
        <li *ngFor="let question of questions">{{ question }}</li>
      </ul>
    </div>
  </div>
</div>

  `,
  styles: ``
})
export class QuizComponent {

  quizForm!: FormGroup;
  questions: string[] = [];
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      subject: ['', Validators.required],
      numQuestions: [5, [Validators.required, Validators.min(1), Validators.max(20)]]
    });
  }

  generateQuiz(): void {
    if (this.quizForm.valid) {
      this.isLoading = true;
      const subject = this.quizForm.value.subject;
      const numQuestions = this.quizForm.value.numQuestions;
      const apiKey = "" //add the api key before running

      const prompt = `Generate ${numQuestions} quiz questions for the subject ${subject}.`;

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
        max_tokens: 150 * numQuestions,
        temperature: 0.7
      };

      this.http.post<any>('https://api.openai.com/v1/chat/completions', body, { headers })
        .subscribe(response => {
          this.questions = response.choices[0].message.content.trim().split('\n').filter((q: any) => q.trim() !== '');
          this.isLoading = false;
        }, error => {
          console.error('Error generating quiz:', error);
          this.isLoading = false;
        });
    }
  }

}
