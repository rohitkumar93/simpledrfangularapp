import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private apiService: ApiserviceService) {}

  createTask(): void {
    this.apiService.getList().subscribe(
      response => {
        console.log('Task created successfully:', response);
      },
      error => {
        console.error('Error creating task:', error);
      }
    );
  }
}
