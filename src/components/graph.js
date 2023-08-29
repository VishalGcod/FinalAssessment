import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

export const Graph=({chartData})=> {
  return (
    <div>
        <Line data={chartData}/>
    </div>
  )
}

export const UserData=[
    {
        id:1,
        year:2016,
        users:10000,
    },
    {
        id:2,
        year:2018,
        users:10200,
    },
    {
        id:3,
        year:2020,
        users:20000,
    },
    {
        id:4,
        year:2022,
        users:23000,
    },
    {
        id:5,
        year:2023,
        users:40000,
    },
]
  
