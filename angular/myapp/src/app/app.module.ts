import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsAPIService } from './main/service/news-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './main/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewpostComponent } from './main/content/newpost/newpost.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreatepostComponent } from './main/createpost/createpost.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NewstableComponent } from './main/newstable/newstable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './spinner/loader.service';
import { InterceptorService } from './spinner/interceptor.service';
import { MatIconModule } from '@angular/material/icon';
import { PostPageComponent } from './main/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContentComponent,
    NewpostComponent,
    CreatepostComponent,
    NewstableComponent,
    TruncatePipe,
    PostPageComponent,
    NotfoundComponent,
  ],
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    AuthModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: NewsAPIService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
