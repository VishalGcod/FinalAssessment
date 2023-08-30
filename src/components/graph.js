import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

export const Graph=({chartData})=> {
  return (
    <div>
      <Line data={chartData} options={options} height={170} />
    </div>
  );
}

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
        ticks: {
          display: true,
        },
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear",
        position: "left",
        ticks: {
          stepSize: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };


export const UserData=[
    {
        id:1,
        year:'06 Jan',
        users1:0,
        users2:3000,

    },
    {
        id:2,
        year:'07 Jan',
        users1:1500,
        users2:5000,
    },
    {
        id:3,
        year:'08 Jan',
        users1:4000,
        users2:2000,
    },
    {
        id:4,
        year:'09 Jan',
        users1:5000,
        users2:6000,
    },
    {
        id:5,
        year:'10 Jan',
        users1:8000,
        users2:6500,
    },
    {
        id:6,
        year:'11 Jan',
        users1:0,
        users2:7000,
    },
    {
        id:7,
        year:'Today',
        users1:5000,
        users2:0,
    },
]
  
