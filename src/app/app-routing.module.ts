import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { AnnoucementDetailsContainerComponent } from './annoucement-details/annoucement-details-container/annoucement-details-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    title: 'Home page'
  },
  {
    path: 'annoucement-details',
    component: AnnoucementDetailsContainerComponent,
    title: 'Annoucement details'
  },
  /// if path won't be perfectly matched, angular routing might do something unexpected
  /// add path **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
