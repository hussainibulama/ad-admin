import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
const state: any = {
  labels: [
    'April 20',
    'April 21',
    'April 22',
    'April 23',
    'April 24',
    'April 25',
    'April 26',
  ],
  datasets: [
    {
      label: 'Users',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#029244',
      borderColor: '#029244',
      borderWidth: 2,
      data: [85, 15, 45, 50, 90, 100, 30],
      pointRadius: 3,
    },
    {
      label: 'Advertiser',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#E31A1C',
      borderColor: '#E31A1C',
      borderWidth: 2,
      data: [65, 18, 34, 51, 34, 10, 79],
      pointRadius: 3,
    },
  ],
};
const options: ChartOptions<any> = {
  scales: {
    //   title:{display: false},
    x: {
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

export const MainChart = () => {
  return (
    <div>
      <Line type="line" data={state} options={options} />
    </div>
  );
};

const state1: any = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#029244',
      borderColor: '#029244',
      borderWidth: 2,
      data: [15, 15, 15, 81, 92],
      pointRadius: 0,
    },
  ],
};
const options1: ChartOptions<any> = {
  scales: {
    x: {
      display: false,
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
    y: {
      display: false,
      //   stacked: true,
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

export const MiniChart1 = () => {
  return (
    <div>
      <Line type="line" data={state1} options={options1} />
    </div>
  );
};

const state2: any = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#E31A1C',
      borderColor: '#E31A1C',
      borderWidth: 2,
      data: [15, 15, 15, 81, 92],
      pointRadius: 0,
    },
  ],
};
const options2: ChartOptions<any> = {
  scales: {
    x: {
      display: false,
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
    y: {
      display: false,
      //   stacked: true,
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

export const MiniChart2 = () => {
  return (
    <div>
      <Line type="line" data={state2} options={options2} />
    </div>
  );
};

// const state3 = {
//   labels: [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'August',
//     'September',
//   ],
//   datasets: [
//     {
//       label: '',
//       fill: 'origin',
//       lineTension: 0,
//       backgroundColor: 'rgba(0, 103, 192, 0.26)',
//       borderColor: 'rgba(0, 103, 192, 0.26)',
//       borderWidth: 0.5,
//       data: [10, 15, 15, 0, 10, 13, 13, 15],
//       pointRadius: 2,
//     },
//   ],
// };
// const options3: ChartOptions = {
//   scales: {
//     x: {
//       display: false,
//       grid: {
//         drawBorder: false,
//         drawOnChartArea: false,
//         drawTicks: false,
//       },
//     },
//     y: {
//       display: false,
//       //   stacked: true,
//       grid: {
//         drawBorder: false,
//         drawTicks: false,
//         drawOnChartArea: false,
//       },
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//       position: 'right',
//       labels: {},
//     },
//     title: {
//       display: false,
//       text: 'Chart.js Doughnut Chart',
//     },
//   },
// };

// export const MiniChart3 = () => {
//   return (
//     <div>
//       <Line type data={state3} options={options3} />
//     </div>
//   );
// };

// const state4 = {
//   labels: [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'August',
//     'September',
//   ],
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: ' #FF7F00',
//       borderWidth: 1,
//       data: [15, 35, 35, 55, 55, 35, 35, 70, 75],
//       pointRadius: 0,
//     },
//   ],
// };
// const options4: ChartOptions = {
//   scales: {
//     x: {
//       display: false,
//     },
//     y: {
//       display: false,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//       position: 'right',
//       labels: {},
//     },
//     title: {
//       display: false,
//       text: 'Chart.js Doughnut Chart',
//     },
//   },
// };

// export const MiniChart4 = () => {
//   return (
//     <div>
//       <Line type data={state4} options={options4} />
//     </div>
//   );
// };
