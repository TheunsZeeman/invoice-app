import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoices } from '../invoices';
import { InvoicesService } from '../invoices.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  invoiceForm: Invoices = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    description: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private invoiceService: InvoicesService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.invoiceService.getById(id).subscribe((data) => {
      this.invoiceForm = data;
    });
  }
 
  update() {
    this.invoiceService.update(this.invoiceForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/invoices/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}