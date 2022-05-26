import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NewsAPIService } from './main/service/news-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    ContentComponent,
    NewpostComponent,
    CreatepostComponent,
    NewstableComponent,
    TruncatePipe,
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
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [NewsAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
