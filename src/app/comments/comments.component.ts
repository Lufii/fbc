import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input('showCommentsSection') show: boolean;
  comments: Array<object> = [{
    author:'Pirate McDudder',
    content: 'Yarr very much so. An interesting concept. Will there be cake?'
  }];
  newCommenter: string;
  newComment: string;

  constructor() { }

  ngOnInit() {
  }

  addNewComment() {
    this.comments.push({
      'author':this.newCommenter,
      'content': this.newComment
    });
  }



}
