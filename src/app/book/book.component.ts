import { Component, Input, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit 
{
 @Input() pro:string='none'
  books: Book[]=[];
  errorMessage: string='none';

  constructor(private bookService:BookService) { }
  getBooks() {
    this.bookService.getBooks().subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }

  ngOnInit(): void 
  {
    this.getBooks();
  }
  show:boolean=false
  showJson()
  {
    this.show=true

  }

}
