import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.page.html',
  styleUrls: ['./swipe.page.scss'],
})
export class SwipePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  swipeLeftEvent(e) {
    if (e.direction == 2) {
        //direction 2 = right to left swipe.
    }
}
}
