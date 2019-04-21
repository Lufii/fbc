import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('p') post: object;
  @Output() author = new EventEmitter<string>();
  currentDate: date = new Date();
  currentDay: number = this.currentDate.getDate();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();
  months: array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  likes: number = Math.floor((Math.random()*100));

  daySuffix(day: number){
    if(day===1 || day===21 || day ===31)
      return 'st'
    else if(day===2 || day ===22)
      return 'nd'
    else if(day===3 || day===23)
      return 'rd'
    else
      return 'th'
  }

  sendAuthor(post){
    this.author.emit(post.userid);
    console.log(post.userid);
  }

  increaseLikes(){
    this.likes++;
  }

  constructor() { }

  ngOnInit() {
  }

}
