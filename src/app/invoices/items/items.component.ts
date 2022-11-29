import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../invoices';
import { InvoicesService } from '../invoices.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems: Items[] = [];
  iId : number = 0;
  itemsForm: Items = {
    id: 0,
    
    price: 0,
    quantity: 0,
    description: ''
  };
  constructor(private InvoiceService: InvoicesService,
    private route: ActivatedRoute,
    private router:Router
    ) {

  }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getItemsById(id);
      this.iId = id;
    });
  }
 
  getItemsById(id: number) {
    this.InvoiceService.getItemsById(id).subscribe((data) => {
      this.itemsForm = data;
      console.log(data);
    });
  }
  previousItemsById() {
    this.iId--;
    console.log(this.iId);
    try{
    this.InvoiceService.getItemsById(this.iId).subscribe((data) => {
      this.itemsForm = data;
      console.log(data);
    });
  }catch(ex){alert(ex);}
  }
  nextItemsById() {
    this.iId++;
    try{
    this.InvoiceService.getItemsById(this.iId).subscribe((data) => {
      this.itemsForm = data;
      console.log(data);
    });
  }catch(ex){alert(ex);}
  }
}
