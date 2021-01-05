import React, { useState, useEffect } from "react";
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = ({ data: { confirmed, deaths, recovered }, country, totalRecovered, provinces, totalInfected, totalDeaths }) => {

    /*
    * Bar chart of infected,recovered, and deaths for a specific province (or all of Canada)
    */
    const barChart = (
        // If the data exists, show the bar chart, else return null
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }]

                }}
                options={{
                    legend: { display: false },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                        yAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                    }
                    //title: {display: true, text:'Current state in ' + country},
                }}
            />
        ) : null
    );



    /*
    * Bar chart of total infected patients across all the provinces
    */
    const totalInfectedBarChart = (
        // If the data exists, show the bar chart, else return null
        totalInfected[0] && provinces[0] ? (
            <Bar
                data={{
                    labels: [provinces[0], provinces[1], provinces[2], provinces[3], provinces[4], provinces[5], provinces[6],
                    provinces[7], provinces[8], provinces[9], provinces[10], provinces[11], provinces[12]],
                    datasets: [{
                        label: 'Active Cases',
                        backgroundColor: [
                            //Reference: https://www.rapidtables.com/web/color/RGB_Color.html
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(255, 0, 127, 0.5)',
                            'rgba(255, 0, 255, 0.5)',
                            'rgba(127, 0, 255, 0.5)',
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 128, 255, 0.5)',
                            'rgba(0, 255, 255, 0.5)',
                            'rgba(0, 255, 128, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(128, 255, 0, 0.5)',
                            'rgba(255, 255, 0, 0.5)',
                            'rgba(255, 128, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(128, 128, 128, 0.5)',
                        ],
                        data: [totalInfected[0], totalInfected[1], totalInfected[2], totalInfected[3],
                        totalInfected[4], totalInfected[5], totalInfected[6], totalInfected[7], totalInfected[8],
                        totalInfected[9], totalInfected[10], totalInfected[11], totalInfected[12]],
                    }]

                }}
                options={{
                    legend: { display: false },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                        yAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                    }
                    //title: {display: true, text:'Current state in ' + country},
                }}
            />
        ) : null
    );



    /*
    * Bar chart of total recovered patients across all the provinces
    */
    const totalRecoveredBarChart = (
        // If the data exists, show the bar chart, else return null
        totalRecovered[0] && provinces[0] ? (
            <Bar
                data={{
                    labels: [provinces[0], provinces[1], provinces[2], provinces[3], provinces[4], provinces[5], provinces[6],
                    provinces[7], provinces[8], provinces[9], provinces[10], provinces[11], provinces[12]],
                    datasets: [{
                        label: 'Recovered',
                        backgroundColor: [
                            //Reference: https://www.rapidtables.com/web/color/RGB_Color.html
                            // 'rgba(255, 0, 0, 0.5)',
                            // 'rgba(255, 128, 0, 0.5)',
                            // 'rgba(255, 255, 0, 0.5)',
                            // 'rgba(128, 255, 0, 0.5)',
                            // 'rgba(0, 255, 0, 0.5)',
                            // 'rgba(0, 255, 128, 0.5)',
                            // 'rgba(0, 255, 255, 0.5)',
                            // 'rgba(0, 128, 255, 0.5)',
                            // 'rgba(0, 0, 255, 0.5)',
                            // 'rgba(127, 0, 255, 0.5)',
                            // 'rgba(255, 0, 255, 0.5)',
                            // 'rgba(255, 0, 127, 0.5)',
                            // 'rgba(128, 128, 128, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(255, 0, 127, 0.5)',
                            'rgba(255, 0, 255, 0.5)',
                            'rgba(127, 0, 255, 0.5)',
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 128, 255, 0.5)',
                            'rgba(0, 255, 255, 0.5)',
                            'rgba(0, 255, 128, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(128, 255, 0, 0.5)',
                            'rgba(255, 255, 0, 0.5)',
                            'rgba(255, 128, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(128, 128, 128, 0.5)',
                        ],
                        data: [totalRecovered[0], totalRecovered[1], totalRecovered[2], totalRecovered[3],
                        totalRecovered[4], totalRecovered[5], totalRecovered[6], totalRecovered[7], totalRecovered[8],
                        totalRecovered[9], totalRecovered[10], totalRecovered[11], totalRecovered[12]],
                    }]

                }}
                options={{
                    legend: { display: false },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                        yAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                    }
                    //title: {display: true, text:'Current state in ' + country},
                }}
            />
        ) : null
    );



    /*
    * Bar chart of total deaths across all the provinces
    */
    const totalDeathsBarChart = (
        // If the data exists, show the bar chart, else return null
        totalDeaths[0] && provinces[0] ? (
            <Bar
                data={{
                    labels: [provinces[0], provinces[1], provinces[2], provinces[3], provinces[4], provinces[5], provinces[6],
                    provinces[7], provinces[8], provinces[9], provinces[10], provinces[11], provinces[12]],
                    datasets: [{
                        label: 'Deaths',
                        backgroundColor: [
                            //Reference: https://www.rapidtables.com/web/color/RGB_Color.html
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(255, 0, 127, 0.5)',
                            'rgba(255, 0, 255, 0.5)',
                            'rgba(127, 0, 255, 0.5)',
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 128, 255, 0.5)',
                            'rgba(0, 255, 255, 0.5)',
                            'rgba(0, 255, 128, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(128, 255, 0, 0.5)',
                            'rgba(255, 255, 0, 0.5)',
                            'rgba(255, 128, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(128, 128, 128, 0.5)',
                        ],
                        data: [totalDeaths[0], totalDeaths[1], totalDeaths[2], totalDeaths[3],
                        totalDeaths[4], totalDeaths[5], totalDeaths[6], totalDeaths[7], totalDeaths[8],
                        totalDeaths[9], totalDeaths[10], totalDeaths[11], totalDeaths[12]],
                    }]

                }}
                options={{
                    legend: { display: false },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                        yAxes: [{
                            ticks: {
                                fontColor: "rgb(138, 133, 255)", // this here
                            },
                        }],
                    }
                    //title: {display: true, text:'Current state in ' + country},
                }}
            />
        ) : null
    );

    /*
    * Display all the charts
    */
    return (
        <div className={styles.container}>
            <h4>Active Cases</h4>
            {totalInfectedBarChart}
            <h4>Total Recovered</h4>
            {totalRecoveredBarChart}
            <h4>Total Deaths</h4>
            {totalDeathsBarChart}
            <h4>Totals for Each Province</h4>
            {/* {barChart} */}

        </div>
    )
}

export default Chart;
