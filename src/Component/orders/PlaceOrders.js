import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import mongodb from 'mongoose'

const baseUrl = process.env.REACT_APP_POST_API_URL;


const PlaceOrder = () => {
    let params = useParams();
    let navigate = useNavigate();

    let sessionData = sessionStorage.getItem('userData');
    let data = JSON.parse(sessionData)

    const initialValues = {
        id: Math.floor(Math.random() * 1000000),
        rest_name: params.restName,
        name: data.name,
        email: data.email,
        cost: Math.floor(Math.random() * 1000),
        phone: data.phone,
        address: "Hon 12 sec 34"
    }

    const [values, setValues] = useState(initialValues);

    const hanldeInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    // const checkout = () => {
    //     console.log(values)

    //     fetch(`${baseUrl}/clientOrder`, {
    //         method: 'POST',
    //         headers: {
    //             'accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //     })
    //         .then(navigate('/viewOrder'))
    // }
    const checkout = async () => {
        console.log(values)

        try {
           let mongo= await mongodb.connect(baseUrl);
           fetch(`${mongo}/restaurent`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(navigate('/viewOrder'))
           
        } catch (error) {
console.log(error);
        }
      
    }



return (
    <>
        <Header />
        <div className="container">
            <hr />
            <div className="">
                <div className="bg-info">
                    <h3>Order For {params.restName}</h3>
                </div>
                <div className='panel-body'>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="fname" className="control-label">Name</label>
                            <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={hanldeInputChange} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="email" className="control-label">Email</label>
                            <input className="form-control" id="email"
                                name="email" value={values.email} onChange={hanldeInputChange} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="phone" className="control-label">Phone</label>
                            <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={hanldeInputChange} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="address" className="control-label">Address</label>
                            <input className="form-control" id="address"
                                name="address" value={values.address} onChange={hanldeInputChange} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-12">
                            <h2>Total Price is Rs. {values.cost}</h2>
                        </div>
                    </div>
                    <button className='btn btn-success' onClick={checkout}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </>
)

}


export default PlaceOrder