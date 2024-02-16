import React from 'react';
import Search from "./topFilter";
import QuickSearch from "./downFilter";
import Header from '../Header'

const Homeone = () => {
    return (
        <>
        <Header/>
            <Search />
            <QuickSearch />


        </>
    )
}
export default Homeone;