import { Component } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  feedbackslist:any;
  types:string[]=[
    "All",
    "Branding and Communication",
    "Inbound & Content Marketing",
    "Film & Webinar","Digital Marketing",
    "ECommerce & Websites",
    "Market Analysis"
  ]
  selected:string="All"
  constructor(private fs:FeedbacksService){
    this.fs.getServices().subscribe(
      {
        next:(data:any)=> this.feedbackslist=data,

      }
    )
  }
}
