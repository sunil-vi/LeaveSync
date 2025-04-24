import { Component } from '@angular/core';
import { LeaveTableComponent } from "./leave-table/leave-table.component";

@Component({
  selector: 'app-root',
  imports: [LeaveTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {

}