import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './main/content/content.component';
import { MainComponent } from './main/main.component';
import { NewstableComponent } from './main/newstable/newstable.component';
import { PostPageComponent } from './main/post-page/post-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/content' },
  // { path: 'auth', component: AuthFormComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'post/:id', component: PostPageComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'myArticles', component: ContentComponent },
      { path: 'content', component: NewstableComponent },
      {
        path: '**',
        component: NotfoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
