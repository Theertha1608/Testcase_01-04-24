import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authorDetails = {
    name: 'Miya',
    place: 'Delhi',
    website: 'www.example.com',
    phone: '7890356728',
    email: 'miya@gmail.com'
  };
}
