import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fb';
  posts: object;
  authorData: object;
  displayAuthor: boolean;
  self: object;

  getAuthor(authorid){
    self=this;
    this.http.get('http://localhost:3000/user?userId='+authorid).subscribe(data => {
      console.log(data);
      return data;
    });
  }

  receiveAuthor(x) {
    this.authorData=this.getAuthor(x);
    this.displayAuthor=true;
  }

  constructor(private http: HttpClient){
    }

  ngOnInit(): void {
    self=this;
    this.http.get('http://localhost:3000/posts').subscribe(data => {
      console.log(data);
      self.posts=data;
    });
  }
}
