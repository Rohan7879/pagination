import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  data = [
    { name: 'title', value: 10 },
    { name: 'title2', value: 20 },
    { name: 'title3', value: 30 },
    { name: 'title4', value: 40 },
    { name: 'title5', value: 50 },
    { name: 'title6', value: 60 },
    { name: 'title7', value: 70 },
    { name: 'title8', value: 80 },
    { name: 'title9', value: 90 },
    { name: 'title10', value: 100 },
  ];

  pageSize = 5;
  currentPage = 1;
}
