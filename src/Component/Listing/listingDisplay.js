import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {
    const renderFilter = ({ filterData }) => {
        if (filterData) {
            if (filterData.length > 0) {
                return filterData.map((item) => {
                    return (

                        <div>
                            <section className="part-B">

                                <section className="rect-box">
                                    <article className="rectangle-1">
                                        <div className="box">

                                            <img src={item.restaurant_thumb} alt={item.restaurant_name} className="idly-pic" />
                                            <div>
                                                <h3 className="rest-name"> <Link to={`/details?restId=${item.restaurant_id}`}>
                                                    {item.restaurant_name}
                                                </Link></h3>
                                                <p className="fort">{item.rating_text}</p>
                                                <p className="adress"> {item.address}</p>
                                            </div>
                                        </div>
                                        <div className='labelDiv'>
                                            <span className='btn btn-primary'>
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;&nbsp;
                                            <span className='btn btn-success'>
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <hr className="line" />
                                        <div>
                                            <p className="type">CUISINES:  <span className='btn btn-warning'>
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;&nbsp;
                                                <span className='btn btn-danger'>
                                                    {item.cuisines[1].cuisine_name}
                                                </span> </p>
                                            <p className="two">COST: <span className="cost">{item.cost}</span></p>
                                        </div>

                                    </article>



                                </section>
                            </section>

                        </div>

                    )



                })
            } 
            else {
                return (
                    <h2>NO DATA FOUND</h2>
                )
            }
        } else {
            return (
                <div>
                    <h2>LOADING...</h2>
                    <img src="/images/loader.gif" alt="loder" />
                </div>
            )
        }
    }
    return (

        <div>
           
            <div>
                {renderFilter(props)}

            </div>


        </div>

    )
}

export default ListingDisplay;