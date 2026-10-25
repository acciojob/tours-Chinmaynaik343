
import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";

const API_URL = "https://course-api.com/react-tours-project";

function App() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTours = async () => {
        setLoading(true);

        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch tours");
            }

            const data = await response.json();
            setTours(data);
        } catch (error) {
            console.error("Error fetching tours:", error);
            setTours([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    const removeTour = (id) => {
        setTours((prevTours) =>
            prevTours.filter((tour) => tour.id !== id)
        );
    };

    if (loading) {
        return <Loading />;
    }

    if (tours.length === 0) {
        return (
            <main className="container">
                <h2>No tours left</h2>
                <button className="refresh-btn" onClick={fetchTours}>
                    Refresh
                </button>
            </main>
        );
    }

    return (
        <main className="container">
            <h1>Our Tours</h1>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
