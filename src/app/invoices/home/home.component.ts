import { Component, OnInit,ElementRef, ViewChild   } from '@angular/core';
import { Invoices } from '../invoices';
import { Items } from '../invoices';
import { InvoicesService } from '../invoices.service';
import * as XLSX from 'xlsx';

declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allInvoices: Invoices[] = [];
  allItems: Items[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private InvoicesService: InvoicesService) {}
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef | undefined;  
  ngOnInit(): void {
     this.deleteModal = new window.bootstrap.Modal(
       document.getElementById('deleteModal')
     );
    this.get();
      this.getItems();
  }
  get() {
    this.InvoicesService.get().subscribe((data) => {
      this.allInvoices = data;
      //console.log(data);
    });
  }
  getItems() {
    this.InvoicesService.getItems().subscribe((data) => {
      this.allItems = data;
      //console.log(data);
    });
  }
  viewItems() {

  }
   openDeleteModal(id: number) {
     this.idTodelete = id;
     this.deleteModal.show();
   }
 
   delete() {
     this.InvoicesService.delete(this.idTodelete).subscribe({
       next: (data) => {
         this.allInvoices = this.allInvoices.filter(_ => _.id != this.idTodelete)
         this.deleteModal.hide();
       },
     });
   }
    export(){

      //const wb = XLSX.utils.book_new();
      //const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
      
      let Heading = [['id', 'Name', 'Total Price']];
      let Heading2 = [['id', 'Description', 'Quantity', 'Price']];
      //Starting in the second row to avoid overriding and skipping headers
     
     const wb: XLSX.WorkBook = XLSX.utils.book_new();// table_to_sheet(this.allInvoices.nativeElement);  
     const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]); 
     const ws2: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]); 
     XLSX.utils.sheet_add_aoa(ws, Heading);
     XLSX.utils.sheet_add_aoa(ws2, Heading2);
     XLSX.utils.sheet_add_json(ws, this.allInvoices, { origin: 'A2', skipHeader: true });
     XLSX.utils.sheet_add_json(ws2, this.allItems, { origin: 'A2', skipHeader: true });
     XLSX.utils.book_append_sheet(wb, ws, 'invoices');  
     XLSX.utils.book_append_sheet(wb, ws2, 'items');  
     XLSX.writeFile(wb, 'Invoicesheet.xlsx'); 
    }

}
