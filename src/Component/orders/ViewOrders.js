import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrders';
import Header from '../Header'
import mongoose from 'mongoose';

const baseUrl = process.env.REACT_APP_POST_API_URL;

const ViewOrder = () => {
    const [orders, setOrder] = useState();
    let sessionData = sessionStorage.getItem('userData');
    let data = JSON.parse(sessionData)

    // useEffect(() => {
    //     axios.get(`${baseUrl}/clientOrder?email=${data.email}`).then((res) => { setOrder(res.data) })
    // })

useEffect(() => {
        axios.get(`${baseUrl}/clientOrder?email=${data.email}`).then((res) => { setOrder(res.data) })
    })
    return (
        <>
            <Header />
            <DisplayOrder orderData={orders} />
        </>
    )
}

export default ViewOrder;