import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

const routes: Routes = [
  { path: '', component: TaskPageComponent },
  {
    path: 'detail/:id',
    component: TaskDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
