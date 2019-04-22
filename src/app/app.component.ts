import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts').subscribe(data => {
      console.log(data);
      this.posts=data;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log(err.error);
        console.log('Client-side error occured.');
      } else {
        console.log(err.error);
        console.log('Server-side error occured.');
      }
    }
  );
  }

  getAuthor(authorid: number){
    this.http.get('http://localhost:3000/user?userId='+authorid).subscribe(data => {
      console.log(data);
      this.authorData=data;
      this.displayAuthor=true;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log(err.error);
        console.log('Client-side error occured.');
      } else {
        console.log(err.error);
        console.log('Server-side error occured.');
      }
    }
  );
}

toggleModal(){
  this.displayAuthor=false;
}
}
