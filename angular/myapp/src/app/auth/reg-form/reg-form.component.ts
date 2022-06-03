import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  message!: string;
  hide = true;
  RegForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    username: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private service: AuthService) {}

  onSubmitReg() {
    const { email, password, username } = this.RegForm.value;
    this.service.registration(email, password, username).subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      (err: string) => (this.message = err)
    );
  }

  ngOnInit(): void {}
}
