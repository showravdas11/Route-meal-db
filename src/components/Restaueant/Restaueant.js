import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import './Restaueant.css'

const Restaueant = (props) => {
    console.log(props);
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    return (
        <div>
            <Col>
                <Card className='main-card'>
                    <div className="thumb"><Card.Img className="img-fluid" variant="top" src={strMealThumb} /></div>
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 300)}
                        </Card.Text>
                        <button className="details-btn" >SHOW DETAILS</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Restaueant;