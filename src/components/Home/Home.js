
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            {/* Home section */}
            <h3>Welcome to Sports Academy </h3>
            {/* Slider */}
            <Carousel>
                <Carousel.Item className="p-5">
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/kids-sport-team-gathering-children-play-sports-boys-sportswear-jersey-uniforms-having-shout-youth-football-academy-149060693.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://kaptivasportsacademy.com/wp-content/uploads/2020/08/club-training.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ytsports.files.wordpress.com/2015/05/e79a87e9a9ac.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Add service section in Home */}
            <Service></Service>
        </div>



    );
};

export default Home;