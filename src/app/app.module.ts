import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CommonModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // File,
    StatusBar,
    // Toast,
    SplashScreen,
    // Device,
    // InAppBrowser,
    // AndroidPermissions,
    // DatePipe,
    // NativePageTransitions,
    // Media,
    // ScreenOrientation,
    // Base64,
    // AppVersion,
    // Geolocation,
    // Crop,
    // WebView,
    // LongPressModule,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
