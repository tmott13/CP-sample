import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { DialogTicketsComponent } from '../dialog-tickets/dialog-tickets.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class OrderTrackingComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['order_no', 'address', 'start', 'status', 'finish', 'product', 'mix_code', 'ordered', 'quantity', 'delivered', 'tickets'];
  expandedElement: OrderElement | null;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTicketsComponent, {
      width: '1000px',
    //  data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
    //  this.animal = result;
    });
  }
}

  export interface OrderElement {
    order_no: number;
    address: string;
    start: string;
    status: string;
    finish: string;
    product: string;
    mix_code: number;
    ordered: number;
    quantity: number;
    delivered: number;
    customer: number;
    project: string;
  }
  
  const ELEMENT_DATA: OrderElement[] = [
    {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'

    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    }, {
      order_no: 450,
      address: '1718 BUTTERFLY WAY (52 BAY MEADOWS)',
      start: '07:00 AM',
      status: 'COMPLETE',
      finish: '07:00 AM',
      product: `Building Materials Sale`,
      mix_code: 888,
      ordered: 0.02,
      quantity: 0.03,
      delivered: 0.03,
      customer: 250006,
      project: 'QA33290'
    },
  ];


