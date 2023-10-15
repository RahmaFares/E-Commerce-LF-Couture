import React from "react";
import SummaryCards from "./SummaryCards";
import AnalyticsDashboard from "./AnalyticsDashboard";
import RecentActivityFeed from "./RecentActivityFeed";
import DataTables from "./DataTables";
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="summary-cards">
                <SummaryCards.TotalUsersCard />
                <SummaryCards.TotalOrdersCard />
                <SummaryCards.SalesGrowthCard />
                <SummaryCards.WebsiteTrafficCard />
            </div>
            <AnalyticsDashboard />
            <RecentActivityFeed />
            <DataTables />
        </div>
    );
}
