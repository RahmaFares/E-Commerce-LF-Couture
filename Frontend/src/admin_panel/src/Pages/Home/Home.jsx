import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserChart from '../../Components/Charts/UserChart';
import styles from "./Home.module.css";
import RecentActivity from "../../Components/recentActivity/recentActivity";

export default function Home() {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get('/api/user-stats');
                setChartData(transformDataForChart(data));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const transformDataForChart = (data) => {
        return {
            labels: data.map(item => item._id),
            datasets: [{
                label: 'User Signups',
                data: data.map(item => item.count),
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            }]
        };
    };

    return (
        <div className={styles.home}>
            <h1>Dashboard</h1>
            <div className="chart-container">
                {chartData.labels ? <UserChart data={chartData} /> : <p>Loading...</p>}
            </div>
        </div>
    );
}
