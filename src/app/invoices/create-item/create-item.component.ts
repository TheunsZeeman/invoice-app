import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../invoices';
import { Invoices } from '../invoices';
import { InvoicesService } from '../invoices.service';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  itemForm: Items = {
    id: 0,
   
    price: 0,
    quantity: 0,
    description: ''
  };
 
  constructor(private InvoicesService:InvoicesService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.InvoicesService.createItem(this.itemForm)
    
    .subscribe({
      next:(data) => {console.log(this.itemForm)
        this.router.navigate(["/invoices/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}