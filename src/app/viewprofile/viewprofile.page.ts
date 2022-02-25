import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {
  media:any;
  constructor(private router: Router,private route:ActivatedRoute) { 
    // let profiledetails: any = localStorage.getItem('profile')
    // this.media = JSON.parse(profiledetails);
    this.route.queryParams.subscribe(data => {
      this.media = JSON.parse(data["media"]);

    });
  }
  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/home'],);

  }
}
