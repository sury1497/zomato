import React from "react";
import "./downFilter.css";

import { Link } from "react-router-dom";

const DownList = (props) => {
    // console.log(props);
    const listFood = ({ foodData }) => {
        if (foodData) {
            return foodData.map((item) => {
                return (
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id} >
                        <div className="category">
                            <div className="mealbox">
                                <div className="">
                                    <img src={item.meal_image} alt="img" className="picfood" />
                                </div>
                                <div className="p-2 mt-4">
                                    <p className="quick fw-bold h5 text-dark">{item.mealtype}</p>
                                    <p className="disc">{item.content}</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return (
        <div className="">
            {listFood(props)}

        </div>

    )
}

export default DownList;