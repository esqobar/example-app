import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';
import { debounceTime, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  search$: Subject<string> = new Subject<string>();
  searchResults: Movie[] = []
  fetching : boolean = false
  search: string = ""

  constructor(private movieService: MovieService) { }

  ngOnInit(){
    this.search$.pipe(map(query => {
      this.fetching = true
      return query
    }), debounceTime(500))
      .subscribe(this.searchQuery.bind(this))
  }

  searchQuery(query){
    if(query.length > 0){
      this.movieService.searchMovie(query).subscribe((results) => {
        this.fetching = false
        this.searchResults = results
      })
    } else {
      this.fetching = false
      this.searchResults = []
    }
  }

  setCurrentMovie(movie: Movie){
    this.movieService.changeSelectedMovie(movie);
  }
}
