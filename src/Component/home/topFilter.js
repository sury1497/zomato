import React, { useState, useEffect } from 'react';
import "./topFilter.css";

const baseURL = process.env.REACT_APP_API_URL;

const Search = () => {

    const [location, setLocation] = useState([]);
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/location`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setLocation(data);
            })
    }, [])
    const loadCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (

                    <option key={item.state_id} value={item.state_id}>
                        {item.state}</option>

                )
            })
        }
    }
    const cityValue = (element) => {
        // console.log(element.target.value)
        let idState = element.target.value;
        fetch(`${baseURL}/restaurant?stateId=${idState}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setRestaurant(data)
            })

    }
    const loadRestaurant = (data) => {
        if (data) {
            return data.map((item) => {
                return (

                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>

                )
            })
        }
    }
    return (

        <main className="container-fluid backimg">
            <section className="row">
                {/* <div className="col-sm-12 col-lg-12 d-lg-flex d-none justify-content-end py-4">
                    <button className="btn text-white me-3">Login</button>
                    <button className="btn text-white border border-1 border-light me-5">Create an account</button>
                </div> */}
                <div className="d-flex justify-content-center symbol">
                    <p className="icon bg-white text-danger fw-bold d-flex justify-content-center align-content-center pt-2">
                        e!
                    </p>
                </div>
                <p className="text-white text-center fs-1 fw-bold find pt-0">Find the best restaurants, cafés, and
                    bars
                </p>
                <div className="row justify-content-center mb-5">
                   
                    <select className="col-10 col-lg-2 mb-lg-5 mb-3 ms-3 text-muted location ps-4" onChange={cityValue}>
                        <option>select city</option>
                        {loadCity(location)}
                    </select>
                    <select className="col-10 col-lg-4 ms-lg-3 ms-3 mb-lg-5 text-muted restaurants ps-4">
                        <option>select restaurant</option>
                        {loadRestaurant(restaurant)}

                    </select>

                   
                </div>

            </section>
        </main>
    )
}
export default Search;