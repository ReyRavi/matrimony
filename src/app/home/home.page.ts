import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  media: any = [
    { name: 'Priyanka', img: 'assets/imgs/a1.jpg', desc: "27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS,Doctor, Chennai,Tamilnadu, India" },
    { name: 'Priyanka', img: 'assets/imgs/a2.jpg', desc: "28 Yrs, 5 ft 2 in, Tamil, Nair, MBBS,Doctor, Chennai,Tamilnadu, India" },
    { name: 'Priyanka', img: 'assets/imgs/a3.jpg', desc: "29 Yrs, 5 ft 2 in, Tamil, Nair, MBBS,Doctor, Chennai,Tamilnadu, India" },

  ];
  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1.2,
    // autoplay: true
  };
  // slideOptsTwo = {
  //   initialSlide: 1,
  //   slidesPerView: 2,
  //   // loop: true,
  //   centeredSlides: true,
  //   spaceBetween: 0
  // };
  // slideOptsThree = {
  //   initialSlide: 0,
  //   slidesPerView: 3
  // };

  constructor(private router: Router) {

  }
  ngOnInit() {
  }


  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  goToViewProfile(i) {
    localStorage.setItem("profile", JSON.stringify(this.media[i]));
    this.router.navigate(['/viewprofile'],);
  }
}