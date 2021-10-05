import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Service.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    })

    return (
        <div>

            {/* Display all the services */}
            <h1>Our Services</h1>
            <div className="Services p-5">
                {
                    services.map(service => <Service key={service.id} img={service.img} name={service.name} Charge={service.Charge} ></Service>)
                }

            </div>
        </div >
    );
};

function Service(props) {
    return (
        <div className="p-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>Learn {props.name}</Card.Title>
                    <Card.Text>
                        Charge: ${props.Charge}/month
                    </Card.Text>
                    <Button variant="primary">Lets Learn!</Button>
                </Card.Body>
            </Card>
        </div>


    )
}

export default Services;