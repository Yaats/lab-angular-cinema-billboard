import { Component } from '@angular/core';
import { MoviesServiceService } from './movie-list/movies-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    public counterTruc: MoviesServiceService
  ) { }

}
