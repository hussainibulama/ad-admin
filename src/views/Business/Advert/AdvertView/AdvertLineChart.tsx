import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
const state = {
  labels: ['', '', '', '', ''],
  datasets: [
    {
      label: 'Active Ads',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#029244',
      borderColor: '#029244',
      borderWidth: 2,
      data: [0, 2000, 1000, 2000, 3000],
      pointRadius: 3,
    },
    {
      label: 'Inactive Ads',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#CB000B',
      borderColor: ' #CB000B',
      borderWidth: 2,
      data: [1000, 3000, 1000, 1000, 2000],
      pointRadius: 3,
    },
  ],
};
const options: ChartOptions = {
  scales: {
    x: {
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

const AdvertLineChart = () => {
  return (
    <div>
      <Line type data={state} options={options} />
    </div>
  );
};

export default AdvertLineChart;
