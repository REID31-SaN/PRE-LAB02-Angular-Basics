
//AI USE: This file was modified and fixed using a mix of chatGPT and Deepseek whilst doing activity 2 and 3.
//        Both AI's were used as the previous files had an error that led to me using styles.css on Activity 2 to Force my preffered style. :)

import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import type { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // =====================================
  // PERSONAL INFORMATION
  // App owns the data passed to children.
  // =====================================

  fullName = 'Jeorge Andrei Benedict M. Santos';
  location = 'San Fernando, Pampanga';
  email = 'jmsantos9@student.hau.edu.ph';
  phone = '09XX XXX XXXX';

  // Personal profile (expand to at least 80 words).
  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications. I am continuously developing my programming, design, and problem-solving skills through academic projects and independent practice. My goal is to become a skilled web developer who can create responsive, accessible, and user-friendly websites. I am interested in exploring modern frameworks, improving my understanding of software development, and gaining practical experience by working on projects that turn ideas into useful digital solutions.';

  // =====================================
  // KEY SKILLS
  // Passed to the Skills component.
  // =====================================

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Responsive Design',
    'Node.js',
    'Figma',
    'UI/UX Design',
    'Git and GitHub',
    'Problem Solving'
  ];

  // =====================================
  // TECHNICAL PROFICIENCIES
  // Passed to the Footer component.
  // =====================================

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  // =====================================
  // SKILL SELECTION MESSAGE
  // Receives events from the Skills component.
  // =====================================

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
