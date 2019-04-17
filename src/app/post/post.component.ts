import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('p') post: object;
  @Output() author = new EventEmitter<string>();

  sendAuthor(post){
    this.author.emit(post.userid);
    console.log(post.userid);
  }

  constructor() { }

  ngOnInit() {
  }

}
