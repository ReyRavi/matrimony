import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {
  media:any;
  constructor(private router: Router) { 
    let profiledetails: any = localStorage.getItem('profile')
    this.media = JSON.parse(profiledetails);
  }
  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/home'],);

  }
}
