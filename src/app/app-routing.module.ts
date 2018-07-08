import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactTagComponent } from './contact-tag/contact-tag.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: ContactTagComponent
  },
  {
    path: 'contacts/:id',
    component: ContactComponent
  },
  {
    path: 'contactTag/:id',
    component: ContactTagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
