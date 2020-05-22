import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-search-preview',
  templateUrl: './search-preview.component.html',
  styleUrls: ['./search-preview.component.css']
})
export class SearchPreviewComponent implements OnInit {

  @Input() movie: Movie = {}
  @Input() index: number = 1
  constructor() { }

  ngOnInit(): void {
  }

  backdropStyle = () => ({
    'background': `linear-gradient(180deg, rgba(0,0,0,.7), transparent), url(${this.movie.backdropUrl})`,
    'background-size': 'cover'
  })

  animationDelay = () => ({
    'animation-delay': `${this.index*.3}s`
  })
}
