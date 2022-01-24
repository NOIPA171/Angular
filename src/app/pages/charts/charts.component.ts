import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  pieChartData = {
    labels: ['foo', 'bar', 'baz'],
    datasets: [{ data: [100, 200, 300] }],
  };
  barChartData = {
    labels: ['2022', '2023', '2024', '2025', '2026', '2027'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27], label: 'Series B' },
      { data: [38, 42, 45, 60, 86, 27], label: 'Series C' },
    ],
  };
  barChartOptions = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
