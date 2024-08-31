import { Routes } from '@angular/router';
import { StudyPlannerComponent } from './study-planner/study-planner.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: StudyPlannerComponent,
  },
];
