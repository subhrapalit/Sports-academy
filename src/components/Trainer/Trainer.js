import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Trainer = (props) => {
    //Destructuring coaches objects
    const { name, team, teach, img } = props.coach;


    return (

        //display coaches
        <div className="m-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '175px' }} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Team: {team}</p>
                        <p>Teaches: {teach}</p>

                    </Card.Text>
                    <Button variant="primary">Lets Learn!</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Trainer;