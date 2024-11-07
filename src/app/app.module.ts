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
import { AnnoucementDetailsHeaderComponent } from './annoucement-details/annoucement-details-header/annoucement-details-header.component';
import { AnnoucementDetailsInfoComponent } from './annoucement-details/annoucement-details-info/annoucement-details-info.component';
import { AnnoucementDetailsSidebarComponent } from './annoucement-details/annoucement-details-sidebar/annoucement-details-sidebar.component';
import { AnnoucementDetailsImagesComponent } from './annoucement-details/annoucement-details-info/annoucement-details-images/annoucement-details-images.component';
import { AnnoucementDetailsDescriptionComponent } from './annoucement-details/annoucement-details-info/annoucement-details-description/annoucement-details-description.component';
import { AnnoucementDetailsLocationComponent } from './annoucement-details/annoucement-details-info/annoucement-details-location/annoucement-details-location.component';
import { AnnoucementDetailsPriceComponent } from './annoucement-details/annoucement-details-sidebar/annoucement-details-price/annoucement-details-price.component';
import { AnnoucementDetailsSellerComponent } from './annoucement-details/annoucement-details-sidebar/annoucement-details-seller/annoucement-details-seller.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';

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
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
