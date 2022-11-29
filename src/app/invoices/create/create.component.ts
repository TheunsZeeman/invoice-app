import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoices } from '../invoices';
import { InvoicesService } from '../invoices.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  invoiceForm: Invoices = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    description: ''
  };
 
  constructor(private InvoicesService:InvoicesService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.InvoicesService.create(this.invoiceForm)
    
    .subscribe({
      next:(data) => {console.log(this.invoiceForm)
        this.router.navigate(["/invoices/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
