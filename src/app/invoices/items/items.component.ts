import { Component, OnInit,ElementRef,ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../invoices';
import { InvoicesService } from '../invoices.service';
declare var window: any;
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems: Items[] = [];
  iId : number = 0;
  deleteModal: any;
  idTodelete: number = 0;
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
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
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
  openDeleteModal() {
    this.idTodelete = this.iId;
    this.deleteModal.show();
  }
  delete() {
    console.log('in del');
    this.InvoiceService.deleteItem(this.idTodelete).subscribe({
      next: (data) => {
        this.allItems = this.allItems.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
        window.location.reload();
      },
    });

  }
}
