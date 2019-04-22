import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @Input('author') author: object;
  @Output() show = new EventEmitter<boolean>();

  closeModal(){
    this.show.emit(false);
  }

  constructor() { }

  ngOnInit() {
  }

}
