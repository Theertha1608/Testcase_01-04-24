import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestcaseDirectiveDirective } from './Directive/testcase-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule, TestcaseDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'travel-blog';
}
