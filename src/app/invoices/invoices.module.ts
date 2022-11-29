import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ItemsComponent } from './items/items.component';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    ItemsComponent,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule
  ]
})
export class InvoicesModule { }
