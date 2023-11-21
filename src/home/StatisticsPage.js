import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const mockData = {
    id: '1',
    name: 'History Example',
    products: [
        { name: 'Product1', price: 10, quantitySold: 20 },
        { name: 'Product2', price: 15, quantitySold: 15 },
        { name: 'Product3', price: 8, quantitySold: 30 },
    ],
};

const StatisticsPage = () => {
    const [historyData, setHistoryData] = useState(mockData);
    const nav = useNavigate();

    const goBackClick = () => {
        nav("/")
    }

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/history/Vending Machine");
            const data = await response.json();
            setHistoryData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const calculateTotalIncome = () => {
        return historyData.products.reduce((total, product) => total + product.price * product.quantitySold, 0);
    };

    const getChartData = () => {
        const labels = historyData.products.map((product) => product.name);
        const data = historyData.products.map((product) => product.quantitySold);

        return {
            labels,
            datasets: [
                {
                    label: 'Quantity Sold',
                    data,
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    return (
        <div>
            <h1>{historyData.name}</h1>
            <Button variant='contained' sx={{marginTop: 5}} onClick={goBackClick}>Go back</Button>
            <p>Total Income: ${calculateTotalIncome()}</p>
            <div>
                <Bar
                    data={getChartData()}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default StatisticsPage;