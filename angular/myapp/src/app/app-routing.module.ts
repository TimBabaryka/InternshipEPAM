import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './main/content/content.component';
import { MainComponent } from './main/main.component';
import { NewstableComponent } from './main/newstable/newstable.component';
import { PostPageComponent } from './main/post-page/post-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/content' },
  { path: 'layout', component: LayoutComponent },
  { path: 'post/:id', component: PostPageComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'myArticles', component: ContentComponent },
      { path: 'content', component: NewstableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
