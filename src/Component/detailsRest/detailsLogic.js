import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import "./details.css";
import Header from '../Header'
const baseURL = process.env.REACT_APP_API_URL

const RestaurantDetails = () => {

    let [searchParams] = useSearchParams();
    let [restInfo, setrestInfo] = useState();
    let [mealNumber] = useState(sessionStorage.getItem("mealId"));
    let navi = useNavigate();



    let restId = searchParams.getAll('restId');

    const detailInfo = async () => {
        const dinfo = await Axios.get(`${baseURL}/details/${restId}`);
        setrestInfo(dinfo.data[0]);
    }

    useEffect(() => {
        detailInfo()
    });

    const proceed = () => {
        navi(`/placeOrder/${restInfo.restaurant_name}`)
    }

    const finalInfo = () => {
        if (restInfo) {
            return (
                <>
                    <Header />
                    <div className='tileImage'>
                        <div className='imageClass'>
                            <img src={restInfo.restaurant_thumb}
                                alt={restInfo.restaurant_name} />
                        </div>
                    </div>
                    <div className='tileContent'>
                        <div className='content'>
                            <h1 className='nameRest'>{restInfo.restaurant_name}</h1>
                            <span id="cfeedback">231 Customers Rating Average</span>
                            <h3>Old Price <del>Rs. 450</del></h3>
                            <h3>Offer Price Rs. {restInfo.cost}</h3>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="" />
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="col-md-12">
                            <Link className='btn btn-danger'
                                to={`/listing/${mealNumber}`}>
                                Back
                            </Link> &nbsp;&nbsp;
                            <button className="btn btn-success"
                                onClick={proceed}>
                                Proceed
                            </button>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className='main'>
                {finalInfo()}
            </div>
        </>
    )
}
export default RestaurantDetails