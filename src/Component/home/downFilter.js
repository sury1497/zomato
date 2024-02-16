import React, { useState, useEffect } from 'react';
import "./downFilter.css";
import DownList from './downDisplay';

const baseURL = process.env.REACT_APP_API_URL;

const QuickSearch = () => {

    const [foodType, setFoodType] = useState([]);
    useEffect(() => {
        fetch(`${baseURL}/quicksearch`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setFoodType(data)
            })
    }, [])
    return (
        <main className="container">
            <section className="row">
                <div className="col-12 pt-5">
                    <p className="h3 fw-bold quick">Quick Searches</p>
                    <p className="disc">Discover restaurants by type of meal</p>
                </div>

            </section>
            
            <DownList foodData={foodType} />

        </main>
    )
}
export default QuickSearch;