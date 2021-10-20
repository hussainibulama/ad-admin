import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import styled from 'styled-components';
const state: any = {
  labels: ['Year', 'Month', 'Week', 'Day'],
  datasets: [
    {
      label: 'Download',
      backgroundColor: '#E1B000',
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      //   barThickness: 35,
      // borderWidth: 0,
      // borderColor: '',
      data: [10000, 12000, 11000, 10000],
    },
    {
      label: 'Update',
      backgroundColor: '#00A85A',
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      data: [11111, 10900, 9000, 5000],
    },
  ],
};
const options: ChartOptions<any> = {
  scales: {
    x: {
      ticks: {
        // beginAtZero: true,
        color: '#023439',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
    y: {
      ticks: {
        // count:23,
        stepSize: 1000,
      },
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
      text: '',
    },
  },
};
export const Chart1 = () => {
  return (
    <div>
      <Bar type="bar" data={state} options={options} />
    </div>
  );
};

const state1: any = {
  maintainAspectRatio: true,
  labels: ['Facebook', 'Twitter', 'Medium', 'LinkedIn'],
  datasets: [
    {
      label: 'Social Media Platforms',
      backgroundColor: ['#F9A825', '#F9A825', '#EBEBEB', '#EBEBEB'],
      hoverBackgroundColor: ['#F9A825', '#F9A825', '#EBEBEB', '#EBEBEB'],
      data: [65, 59, 80, 81, 56],
      borderWidth: 0,
      borderRadius: 0,
      radius: '100%',
      cutout: '80%',
    },
    {
      label: 'Social Media Platforms',
      backgroundColor: ['#00A85A', '#00A85A', '#EBEBEB', '#EBEBEB'],
      hoverBackgroundColor: ['#00A85A', '#00A85A', '#EBEBEB', '#EBEBEB'],
      data: [65, 59, 80, 81, 56],
      borderWidth: 0,
      borderRadius: 0,
      radius: '95%',
      cutout: '80%',
    },
  ],
};

const ChartT = styled.div`
  margin-top: -180px;
`;

export const Chart2 = () => {
  return (
    <ChartT>
      <Doughnut
        type="doughnut"
        data={state1}
        width={50}
        height={50}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              // text: 'Chart.js Doughnut Chart',
              padding: 180,
            },
          },
        }}
      />
    </ChartT>
  );
};
