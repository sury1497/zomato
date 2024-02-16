import React, { useState, useEffect } from "react";
import "./listing.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListingDisplay from "./listingDisplay";
import CuisineFilter from "../filters/cuisine";
import CostFilter from "../filters/cost";
import Header from '../Header'

const baseURL = process.env.REACT_APP_API_URL;

const Listing = () => {

    let inputParam = useParams()
    const [restaurantDetails, setrestaurantDetails] = useState([]);

    console.log(inputParam.mealId)

    let meal = inputParam.mealId
    useEffect(() => {
        sessionStorage.setItem("mealId", meal)
        axios.get(`${baseURL}/restaurant?mealtype_id=${meal}`)
            .then((res) => {
                setrestaurantDetails(res.data)
            })
    }, [meal])

    const setDataPerFilter = (data) => {
        setrestaurantDetails(data)
    }
    return (
        <>
            <Header /> 
            <h1>Breakfast Places in Mumbai</h1>

            <div className="d-flex justify-content-between ">
                <div className='side'>
                    <CuisineFilter mealId={meal}
                        restPerCuisine={(data) => { setDataPerFilter(data) }} />

                    <CostFilter restPerCost={(data) => { setDataPerFilter(data) }}
                        mealId={meal} />

                </div>
                <ListingDisplay filterData={restaurantDetails} />
            </div>
        </>
    )
}

export default Listing;