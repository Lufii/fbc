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
    this.http.get('http://localhost:3000/user?userId='+authorid).subscribe(data => {
      console.log(data);
      this.authorData=data;
    });
  }

  receiveAuthor(author) {
    this.getAuthor(author);
    console.log(this.authorData);
    this.displayAuthor=true;
  }

  toggleModal(){
    this.displayAuthor=false;
  }

  constructor(private http: HttpClient){
    }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts').subscribe(data => {
      console.log(data);
      this.posts=data;
    });
  }
}
