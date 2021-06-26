import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

const state = {
  labels: [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ],
  datasets: [
    {
      label: 'Chart',
      backgroundColor: '#F9A825',
      color: '#f32121',
      borderColor: '#F9A825',
      borderWidth: 0,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
const options: ChartOptions = {
  scales: {
    x: {
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'right',
      labels: {},
    },
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart',
    },
  },
};
function Charts() {
  return (
    <div>
      <Bar type data={state} options={options} />
    </div>
  );
}

export default Charts;
