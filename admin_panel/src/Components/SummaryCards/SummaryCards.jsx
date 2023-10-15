import React, { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export function TotalUsersCard() {
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        const fetchTotalUsers = async () => {
            try {
                const res = await userRequest.get("/users/total");
                setTotalUsers(res.data.totalUsers);
            } catch (error) {
                console.error("Error fetching total users: ", error);
            }
        };

        fetchTotalUsers();
    }, []);

    return (
        <div className="featuredItem">
            <span className="featuredTitle">Total Users</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{totalUsers}</span>
            </div>
        </div>
    );
}

export function TotalOrdersCard() {
    const [totalOrders, setTotalOrders] = useState(0);

    useEffect(() => {
        const fetchTotalOrders = async () => {
            try {
                const res = await userRequest.get("/orders/total");
                setTotalOrders(res.data.totalOrders);
            } catch (error) {
                console.error("Error fetching total orders: ", error);
            }
        };

        fetchTotalOrders();
    }, []);

    return (
        <div className="featuredItem">
            <span className="featuredTitle">Total Orders</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{totalOrders}</span>
            </div>
        </div>
    );
}

export function SalesGrowthCard() {
    const [salesGrowth, setSalesGrowth] = useState(0);

    useEffect(() => {
        const fetchSalesGrowth = async () => {
            try {
                const res = await userRequest.get("/sales/growth");
                setSalesGrowth(res.data.salesGrowth);
            } catch (error) {
                console.error("Error fetching sales growth: ", error);
            }
        };

        fetchSalesGrowth();
    }, []);

    return (
        <div className="featuredItem">
            <span className="featuredTitle">Sales Growth</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    {salesGrowth}%
                    <ArrowUpward className="featuredIcon" />
                </span>
            </div>
        </div>
    );
}

export function WebsiteTrafficCard() {
    const [websiteTraffic, setWebsiteTraffic] = useState(0);

    useEffect(() => {
        const fetchWebsiteTraffic = async () => {
            try {
                const res = await userRequest.get("/website/traffic");
                setWebsiteTraffic(res.data.websiteTraffic);
            } catch (error) {
                console.error("Error fetching website traffic: ", error);
            }
        };

        fetchWebsiteTraffic();
    }, []);

    return (
        <div className="featuredItem">
            <span className="featuredTitle">Website Traffic</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{websiteTraffic}</span>
            </div>
        </div>
    );
}
