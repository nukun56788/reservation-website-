import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.dataService.login(this.loginForm.value).subscribe(
        (response: any) => {
          // Handle successful login and store the token
          if (response.token) {
            localStorage.setItem('token', response.token); // เก็บ token ใน localStorage
            this.router.navigate(['/']); // เปลี่ยนหน้าไปยัง home หลังจาก login สำเร็จ
          } else {
            console.error('Token is missing in the response');
          }
        },
        (error) => {
          // Handle login error
          console.error('Login failed', error);
        }
      );
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); // ใช้ router ในการเปลี่ยนหน้า
  }
}
