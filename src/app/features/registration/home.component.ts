import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';  // import the user service
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule, RouterModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  confirmPassword: string = '';
  phoneNumber: string = '';
  birthDate: string = '';
  email: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // Handle form submission
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      phoneNumber: String(this.phoneNumber),
      birthDate: this.birthDate,
      email: this.email
    };

    console.log('User data:', userData);

    this.userService.registerUser(userData).subscribe(response => {
      console.log('User registered:', response);
      alert('Registration Successful!');
    }, error => {
      console.error('Error registering user:', error);
      alert('Registration failed');
    });

    // Method to navigate to a different page
    this.router.navigate(['/courses']);
  
/*     this.router.navigateByUrl('/courses').then(success => {
      if (success) {
        console.log('Navigation to /courses successful');
      } else {
        console.error('Navigation to /courses failed');
      }
    }); */

  }
}
