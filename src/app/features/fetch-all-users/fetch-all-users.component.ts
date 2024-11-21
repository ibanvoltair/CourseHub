import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserCardComponent } from '../../shared/user-card/user-card.component';

@Component({
  selector: 'app-fetch-all-users',
  standalone: true,
  imports: [ RouterModule, UserCardComponent ],
  templateUrl: './fetch-all-users.component.html',
  styleUrl: './fetch-all-users.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] // Add this line
})
export class FetchAllUsersComponent {

}
