import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServeTheNeedy';
  // constructor(){
  //   setTimeout(() => {
  //     this.title="We should change the name";
  //   }, 2000);
  // }
constructor(private route: ActivatedRoute) { }
ngOnInit(): void { }
}
