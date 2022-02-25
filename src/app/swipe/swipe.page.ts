import { Component, OnInit, ViewChildren, QueryList, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.page.html',
  styleUrls: ['./swipe.page.scss'],
})
export class SwipePage implements OnInit {
  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  @Output() choiceMade = new EventEmitter();

  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;
  heartVisible: boolean;
  crossVisible: boolean;

  cards: any = [
    {
      img: "assets/imgs/a2.jpg",
      title: "Priyanka",
      description: "27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS,Doctor, Chennai,Tamilnadu, India"
    },
    {
      img: "assets/imgs/a3.jpg",
      title: "Priyanka",
      description: "27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS,Doctor, Chennai,Tamilnadu, India"
    },
    {
      img: "assets/imgs/a1.jpg",
      title: "Priyanka",
      description: "27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS,Doctor, Chennai,Tamilnadu, India"
    },
  ];
  constructor(private renderer: Renderer2, public toastController: ToastController) {
  }
  ngOnInit(): void {

  }



  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.cards.length) return false;
    if (heart) {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)')
      this.toggleChoiceIndicator(false, true);
      this.emitChoice(heart, this.cards[0]);
      this.presentToast1()
    } else {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)')
      this.toggleChoiceIndicator(true, false);
      this.emitChoice(heart, this.cards[0]);
      this.presentToast2()

    };
    this.shiftRequired = true;
    this.transitionInProgress = true;
  };

  handlePan(event) {

    if (event.deltaX === 0 || (event.center.x === 0 && event.center.y === 0) || !this.cards.length) return;

    if (this.transitionInProgress) {
      this.handleShift();
    }

    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) { this.toggleChoiceIndicator(false, true) }
    if (event.deltaX < 0) { this.toggleChoiceIndicator(true, false) }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)');

    this.shiftRequired = true;

  };

  handlePanEnd(event) {

    this.toggleChoiceIndicator(false, false);

    if (!this.cards.length) return;

    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {

      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', '');
      this.shiftRequired = false;

    } else {

      let endX = Math.max(Math.abs(event.velocityX) * this.moveOutWidth, this.moveOutWidth);
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)');

      this.shiftRequired = true;

      this.emitChoice(!!(event.deltaX > 0), this.cards[0]);
    }
    this.transitionInProgress = true;
  };

  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  };

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false)
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    };
  };

  emitChoice(heart, card) {
    this.choiceMade.emit({
      choice: heart,
      payload: card
    })
  };

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    })
  };
  fav() {
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Shortlisted',
      duration: 2000
    });
    toast.present();
  }
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Intersted',
      duration: 2000
    });
    toast.present();
  }
  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Not Intersted',
      duration: 2000
    });
    toast.present();
  }
}