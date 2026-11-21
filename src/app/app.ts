import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Header } from './header/header'; 
import { task } from './task/task';
import { Courses } from './courses/courses';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,Home,About,Header,task,Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');
}
