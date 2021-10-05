import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Service.css"

const Service = () => {
    return (

        //Display a part of our services in Home page
        <div className="p-5" >
            <h1>Our Services</h1>
            <div className="Service p-5">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGa_DOXohboGlJnvSOh9R4J3oiyclwFN6uhA&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Learn Football</Card.Title>
                        <Card.Text>
                            Price: $250/month
                        </Card.Text>
                        <Button variant="primary">Lets Learn!</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsXuIzctJM6pZfLQwSpssuxVl2bpxFG-WZA&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Learn Cricket</Card.Title>
                        <Card.Text>
                            Price: $200/month
                        </Card.Text>
                        <Button variant="primary">Lets Learn!</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCKtJITEUrLpmdtHEGjDS-dBTnpqtzoFzJg&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Learn Kabadi</Card.Title>
                        <Card.Text>
                            Price: $350/month
                        </Card.Text>
                        <Button variant="primary">Lets Learn!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLREGvFmAsY0JL8GlUoqm96h1NvRBvnHutA&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Learn Swimming</Card.Title>
                        <Card.Text>
                            Price: $400/month
                        </Card.Text>
                        <Button variant="primary">Lets Learn</Button>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Service;