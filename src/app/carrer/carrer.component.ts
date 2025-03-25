import { Component } from '@angular/core';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent {
  jobListings = [
    {
      title: 'Software Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York',
      type: 'Full-time'
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'San Francisco',
      type: 'Full-time'
    }
  ];
}
