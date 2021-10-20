import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
const state: any = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Fixed',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#00A85A',
      borderColor: '#00A85A',
      borderWidth: 0,
      data: [0, 250, 800, 700, 1000, 800, 600],
      pointRadius: 3,
    },
    {
      label: 'Pending Fixed',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#F9A825',
      borderColor: ' #F9A825',
      borderWidth: 0,
      data: [1000, 750, 1000, 1000, 250, 700, 800],
      pointRadius: 3,
    },
  ],
};
const options: ChartOptions<any> = {
  scales: {
    x: {
      ticks: {
        color: '#045860',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      //   display: false,
      grid: {
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: false,
      },
    },
    y: {
      //   display: false,
      grid: {
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: true,
      },
    },
  },

  responsive: true,

  plugins: {
    legend: {
      display: false,
      position: 'bottom',
      labels: {},
    },

    title: {
      display: false,
      text: 'Chart.js Doughnut Chart',
    },
  },
};

const ErrorChart = () => {
  return (
    <div>
      <Line type="line" data={state} options={options} />
    </div>
  );
};

export default ErrorChart;
