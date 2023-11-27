import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from '../../components/card-article/card-article.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
