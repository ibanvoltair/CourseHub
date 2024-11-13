import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';  // import the user service
import { FormsModule } from '@angular/forms';  // Import FormsModule here
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule],
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

  constructor(private userService: UserService) {}

  // Handle form submission
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const generateUserId = () => {
      // Extract year, month, and day from the birthdate
      const [year, month, day] = this.birthDate.split('-');
    
      // Convert the initials to their ASCII codes
      const firstNameCode = this.firstName ? this.firstName.charCodeAt(0) : 0;
      const lastNameCode = this.lastName ? this.lastName.charCodeAt(0) : 0;
    
      // Extract the last 4 digits of the phone number
      const phoneSuffix = this.phoneNumber.slice(-4);
    
      // Generate a random 3-digit number for uniqueness
      const randomDigits = Math.floor(100 + Math.random() * 900);
    
      // Construct the user ID by combining parts as integers
      // Format: YYYYMMDD + FirstNameCode + LastNameCode + Last4DigitsOfPhone + RandomDigits
      const userId = parseInt(
        `${year}${month}${day}${firstNameCode}${lastNameCode}${phoneSuffix}${randomDigits}`,
        10
      );
    
      return userId;
    }

    const userData = {
      userid: generateUserId(),
      firstname: this.firstName,
      lastname: this.lastName,
      password: this.password,
      phonenumber: this.phoneNumber,
      birthdate: this.birthDate,
      email: this.email
    };

    this.userService.registerUser(userData).subscribe(response => {
      console.log('User registered:', response);
      alert('Registration Successful!');
    }, error => {
      console.error('Error registering user:', error);
      alert('Registration failed');
    });
  }
}
