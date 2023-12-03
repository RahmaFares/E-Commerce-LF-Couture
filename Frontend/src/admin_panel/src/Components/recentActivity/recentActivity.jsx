import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RecentActivity() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const { data } = await axios.get('/api/recent-activities'); // Update the API endpoint as needed
                setActivities(data);
            } catch (error) {
                console.error('Error fetching recent activities:', error);
            }
        };

        fetchActivities();
    }, []);

    return (
        <div className="recent-activities">
            <h2>Recent Activities</h2>
            {activities.length ? (
                <ul>
                    {activities.map((activity, index) => (
                        <li key={index}>{activity.description} - {new Date(activity.timestamp).toLocaleString()}</li>
                    ))}
                </ul>
            ) : (
                <p>No recent activities.</p>
            )}
        </div>
    );
}
