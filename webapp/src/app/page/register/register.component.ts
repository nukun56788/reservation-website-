import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone_number: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.dataService.register(this.registerForm.value).subscribe(
        (response) => {
          alert(response.message); // แสดงข้อความเมื่อสมัครสำเร็จ
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
          alert(error.error.error); // แสดงข้อความ error ที่ได้รับจาก API
        }
      );
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }
}
