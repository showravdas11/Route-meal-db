import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Restaueant from '../Restaueant/Restaueant';
import './OurMenu.css'

const OurMenu = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchFiled = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <div className=" text-center mt-5">
                <input className=' input-box' onChange={handleSearchFiled} placeholder="Search meals here" type="text" />
            </div>

            <div className="container mt-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        meals.map(meal => <Restaueant
                            meal={meal}
                        >
                        </Restaueant>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default OurMenu;