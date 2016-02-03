import {Component} from 'angular2/core';
@Component({
  selector: 'seed-app',
  templateUrl: 'app/components/seed-app.html'
})
export class SeedApp {
  name:string;
  constructor() {
    this.name="hello world angular 2";
  }

}
