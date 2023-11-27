import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardArticleComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
