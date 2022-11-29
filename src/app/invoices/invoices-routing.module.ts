import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ItemsComponent } from './items/items.component';
import { CreateItemComponent } from './create-item/create-item.component';

const routes: Routes = [
  {
    path: 'invoices/home',
    component: HomeComponent,
  },
  {
    path: 'invoices/create',
    component: CreateComponent,
  },
  {
    path: 'invoices/createItem',
    component: CreateItemComponent,
  },
  {
    path:'invoices/edit/:id',
    component: EditComponent
  },
  {
    path:'invoices/items/:id',
    component: ItemsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
