import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { AnnoucementDetailsContainerComponent } from './annoucement-details/annoucement-details-container/annoucement-details-container.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WidthContainer } from './shared/width-container/width-container.component';
import { FooterContactComponent } from '@footer/footer-contact/footer-contact.component';
import { FooterInformationsComponent } from '@footer/footer-informations/footer-informations.component';
import { FooterAboutUsComponent } from '@footer/footer-about-us/footer-about-us.component';
import { FooterAppsComponent } from '@footer/footer-apps/footer-apps.component';
import { AnnoucementDetailsHeaderComponent } from './annoucement-details/annoucement-details-header/annoucement-details-header.component';
import { AnnoucementDetailsInfoComponent } from '@annoucement-info/annoucement-details-info.component';
import { AnnoucementDetailsSidebarComponent } from '@annoucement-sidebar/annoucement-details-sidebar.component';
import { AnnoucementDetailsImagesComponent } from '@annoucement-info/annoucement-details-images/annoucement-details-images.component';
import { AnnoucementDetailsDescriptionComponent } from '@annoucement-info/annoucement-details-description/annoucement-details-description.component';
import { AnnoucementDetailsLocationComponent } from '@annoucement-info/annoucement-details-location/annoucement-details-location.component';
import { AnnoucementDetailsPriceComponent } from '@annoucement-sidebar/annoucement-details-price/annoucement-details-price.component';
import { AnnoucementDetailsSellerComponent } from '@annoucement-sidebar/annoucement-details-seller/annoucement-details-seller.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { AnnoucementSmallComponent } from './annoucement-small/annoucement-small.component';
import { AnnoucementLargeComponent } from './annoucement-large/annoucement-large.component';
import { AnnoucementDetailsProposedComponent } from './annoucement-details/annoucement-details-proposed/annoucement-details-proposed.component';
import { CarouselComponent } from './shared/carousel/carousel.component';


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
    FooterAppsComponent,
    AnnoucementDetailsHeaderComponent,
    AnnoucementDetailsInfoComponent,
    AnnoucementDetailsSidebarComponent,
    AnnoucementDetailsImagesComponent,
    AnnoucementDetailsDescriptionComponent,
    AnnoucementDetailsLocationComponent,
    AnnoucementDetailsPriceComponent,
    AnnoucementDetailsSellerComponent,
    BackButtonComponent,
    SearchbarComponent,
    AnnoucementSmallComponent,
    AnnoucementLargeComponent,
    AnnoucementDetailsProposedComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
