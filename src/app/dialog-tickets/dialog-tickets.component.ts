import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-tickets',
  templateUrl: './dialog-tickets.component.html',
  styleUrls: ['./dialog-tickets.component.scss']
})
export class DialogTicketsComponent {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['load', 'truck', 'status', 'time', 'ticket', 'delivered'];
  constructor(
    public dialogRef: MatDialogRef<DialogTicketsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private dialog: MatDialog) {}

}
export interface TicketElement {
  load: number;
  truck: number;
  status: string;
  time: string;
  ticket: number;
  delivered: number;
}

const ELEMENT_DATA: TicketElement[] = [
  {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  }, {
    load: 1,
    truck: 5175,
    status: 'COMPLETE',
    time: '08:03:00 AM',
    ticket: 6543543,
    delivered: 10
  },
];