import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('p') post: object;
  @Output() author = new EventEmitter<string>();
  displayDate: date= new Date();
  months: array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  sendAuthor(post){
    this.author.emit(post.userid);
    console.log(post.userid);
  }

  constructor() { }

  ngOnInit() {
  }

}
