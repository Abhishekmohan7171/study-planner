import { Routes } from '@angular/router';
import { StudyPlannerComponent } from './study-planner/study-planner.component';
import { LoginComponent } from './login/login.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component:StudyPlannerComponent,
  },
  {
    path: 'get-started',
    component: GetStartedComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  }
];
