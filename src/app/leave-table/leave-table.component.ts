import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave-table',
  imports: [TableModule,CommonModule],
  templateUrl: './leave-table.component.html',
  styleUrl: './leave-table.component.css',
  standalone: true
})
export class LeaveTableComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: 'INSTOCK' | 'OUTOFSTOCK' | 'LOWSTOCK';
  rating: number;
}

