import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';

const routes: Routes = [{ path: 'login', component: AuthFormComponent }];
@NgModule({
  declarations: [AuthFormComponent, RegFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
  exports: [AuthFormComponent],
})
export class AuthModule {}
