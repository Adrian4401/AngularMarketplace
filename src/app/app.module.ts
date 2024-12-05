import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { AnnoucementDetailsContainerComponent } from './annoucement-details/annoucement-details-container/annoucement-details-container.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidthContainer } from './components/width-container/width-container.component';
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
import { BackButtonComponent } from './components/back-button/back-button.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AnnoucementSmallComponent } from './components/annoucement-small/annoucement-small.component';
import { AnnoucementLargeComponent } from './components/annoucement-large/annoucement-large.component';
import { AnnoucementDetailsProposedComponent } from './annoucement-details/annoucement-details-proposed/annoucement-details-proposed.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AdComponent } from './components/ad/ad.component';
import { ResultsComponent } from './results/results.component';
import { FiltersComponent } from './results/filters/filters.component';
import { LoggedToolbarComponent } from './components/logged-toolbar/logged-toolbar.component';
import { AddAnnoucementComponent } from './add-annoucement/add-annoucement.component';
import { StepContainerComponent } from './add-annoucement/step-container/step-container.component';
import { TitleCategoriesComponent } from './add-annoucement/title-categories/title-categories.component';
import { PhotosDescComponent } from './add-annoucement/photos-desc/photos-desc.component';
import { AdditionalInfoComponent } from './add-annoucement/additional-info/additional-info.component';
import { UserInfoComponent } from './add-annoucement/user-info/user-info.component';
import { AddressComponent } from './add-annoucement/address/address.component';
import { MapComponent } from './components/map/map.component';


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
    CarouselComponent,
    AdComponent,
    ResultsComponent,
    FiltersComponent,
    LoggedToolbarComponent,
    AddAnnoucementComponent,
    StepContainerComponent,
    TitleCategoriesComponent,
    PhotosDescComponent,
    AdditionalInfoComponent,
    UserInfoComponent,
    AddressComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
