import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {
  media:any;
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(data => {
      this.media = JSON.parse(data["media"]);

    });
  }

  ngOnInit() {
    console.log(this.media)
  }

}
