import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { AnnoucementDetailsContainerComponent } from './annoucement-details/annoucement-details-container/annoucement-details-container.component';
import { ResultsComponent } from './results/results.component';
import { AddAnnoucementComponent } from './add-annoucement/add-annoucement.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    title: 'Home page'
  },
  {
    path: 'results',
    component: ResultsComponent,
    title: 'Home page'
  },
  {
    path: 'annoucement-details/:id',
    component: AnnoucementDetailsContainerComponent,
    title: 'Annoucement details'
  },
  {
    path: 'add-annoucement',
    component: AddAnnoucementComponent,
    title: 'Add annoucement'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
