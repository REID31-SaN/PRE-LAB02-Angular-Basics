import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Santos Jeorge Andrei Benedict M.';
  location = 'San Fernando, Pampanga';
  email = 'jmsantos9@student.hau.edu.ph';
  phone = '0934 678 1234';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Responsive Design',
    'Node',
    'Figma',
    'UI/UX Design',
    'Git',
    'Responsive Design'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;

  }
}
