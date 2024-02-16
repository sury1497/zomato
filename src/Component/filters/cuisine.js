import React from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL
const CuisineFilter = (props) => {

    const handleFilter = (event) => {
        let mealId = props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl = "";
        if (cuisineId === "") {
            cuisineUrl = `${baseURL}/filter/${mealId}`
        } else {
            cuisineUrl = `${baseURL}/filter/${mealId}?cuisine=${cuisineId}`
        }

        axios.get(cuisineUrl)
            .then((res) => { props.restPerCuisine(res.data) })

    }

    return (
        <>
            <div onChange={handleFilter}>
                <div>
                    <center className='Filter'><h4>Cuisine Filter</h4></center>

                    <div>
                        <label className='radio'>
                            <input type="radio" name="cuisine" value="" />All
                        </label>
                    </div>
                    <div>
                        <label className='radio'>
                            <input type="radio" name="cuisine" value="1" />North Indain
                        </label>
                    </div>
                    <div>
                        <label className='radio'>
                            <input type="radio" name="cuisine" value="2" />South Indian
                        </label>
                    </div>
                    <div>
                        <label className='radio'>
                            <input type="radio" name="cuisine" value="3" />Chinese
                        </label>
                    </div>
                    <div>
                        <label className='radio'>
                            <input type="radio" name="cuisine" value="4" />Fast Food
                        </label>
                    </div>
                    <div>
                        <label className='radio'>
                            <input type="radio" name="cuisine" value="5" />Street Food
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CuisineFilter;