import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };

    console.log(chartData);

    const temperatureData = chartData?.days?.map((day) => ({
        date: day.datetime,
        maxTemp: day.tempmax,
        temp: day.temp,
        minTemp: day.tempmin,
    }));

    const labels = temperatureData?.map((entry) => entry.date) || [];

    const maxTempData = temperatureData?.map((entry) => entry.maxTemp) || [];
    const tempData = temperatureData?.map((entry) => entry.temp) || [];
    const minTempData = temperatureData?.map((entry) => entry.minTemp) || [];

    const data = {
        labels,
        datasets: [
            {
                label: "Max Temp",
                data: maxTempData,
                borderColor: "#ed4444",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Temp",
                data: tempData,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Min Temp",
                data: minTempData,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
        ],
    };

    return (
        <div className="w-full h-full p-5">
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;
