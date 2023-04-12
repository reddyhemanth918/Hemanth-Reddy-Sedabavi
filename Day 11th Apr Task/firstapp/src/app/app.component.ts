import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  public g="dr"

  public h="";
  onClick(){
    this.h="hii u got eventbinding";
  }
}
