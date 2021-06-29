import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
const state = {
  labels: ['', '', '', '', ''],
  datasets: [
    {
      label: 'Users',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#FF7F00',
      borderColor: '#FF7F00',
      borderWidth: 2,
      data: [15, 15, 15, 50, 90],
      pointRadius: 3,
    },
    {
      label: 'Advertiser',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#1F78B4',
      borderColor: '#1F78B4',
      borderWidth: 2,
      data: [5, 18, 14, 51, 34],
      pointRadius: 3,
    },
    {
      label: 'Active Ads',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#318348',
      borderColor: '#318348',
      borderWidth: 2,
      data: [4, 24, 36, 12, 6],
      pointRadius: 3,
    },
    {
      label: 'Inactive Ads',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#FD242B',
      borderColor: ' #FD242B',
      borderWidth: 2,
      data: [3, 15, 18, 9, 21],
      pointRadius: 3,
    },
    {
      label: 'Downloads',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#00A85A',
      borderColor: '#00A85A',
      borderWidth: 2,
      data: [6, 36, 42, 48, 6],
      pointRadius: 3,
    },
    {
      label: 'Token',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#E1B000',
      borderColor: ' #E1B000',
      borderWidth: 2,
      data: [21, 15, 35, 23, 20],
      pointRadius: 3,
    },

    {
      label: 'Referrals',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#33A02C',
      borderColor: '#33A02C',
      borderWidth: 2,
      data: [73, 26, 29, 34, 14],
      pointRadius: 3,
    },
    {
      label: 'Reviews',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#FDBF6F',
      borderColor: '#FDBF6F',
      borderWidth: 2,
      data: [50, 12, 5, 23, 10],
      pointRadius: 3,
    },
  ],
};
const options: ChartOptions = {
  // showXAxisLabel:false,
  scales: {
    //   title:{display: false},
    x: {
      // showAxisLabel:{},
      // labels:{},
      //   display: false,
      grid: {
        //   labels:{},
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
      labels: {
        color: '#333',
      },

      //   borderRadius:2
    },
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart',
    },
  },
};

const Charts = () => {
  return (
    <div>
      <Line type data={state} options={options} />
    </div>
  );
};

export default Charts;
