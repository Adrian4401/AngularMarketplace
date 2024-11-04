import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { AnnoucementDetailsContainerComponent } from './annoucement-details/annoucement-details-container/annoucement-details-container.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WidthContainer } from './shared/width-container/width-container.component';
import { FooterContactComponent } from './shared/footer/footer-contact/footer-contact.component';
import { FooterInformationsComponent } from './shared/footer/footer-informations/footer-informations.component';
import { FooterAboutUsComponent } from './shared/footer/footer-about-us/footer-about-us.component';
import { FooterAppsComponent } from './shared/footer/footer-apps/footer-apps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    AnnoucementDetailsContainerComponent,
    ToolbarComponent,
    FooterComponent,
    WidthContainer,
    FooterContactComponent,
    FooterInformationsComponent,
    FooterAboutUsComponent,
    FooterAppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
