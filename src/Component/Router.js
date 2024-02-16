import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
// import Header from "./Header";
import Main from "./Main";
import Homeone from "./home/Home";
import Listing from "./Listing/listingLogic";
import Details from './detailsRest/detailsLogic';
import Placing from "./orders/PlaceOrders";
import ViewOrder from "./orders/ViewOrders"
import LogIn from './LogIn/signIn'
import Register from './LogIn/register';


const Routerone = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Header /> */}
                <Routes>
                    <Route path='/' element={<Main />} >
                        <Route index element={<Homeone />} />
                        <Route path='listing/:mealId' element={<Listing />} />
                        <Route path='details' element={<Details />} />
                        <Route path='placeOrder/:restName' element={<Placing />} />
                        <Route path='viewOrder' element={<ViewOrder />} />
                        <Route path='login' element={<LogIn />} />
                        <Route path='register' element={<Register />} />

                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>


    )
}
export default Routerone;