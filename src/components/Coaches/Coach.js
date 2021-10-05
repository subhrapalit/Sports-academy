import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';
import "./Coach.css"

const Coach = () => {
    const [coaches, setCoaches] = useState([]);
    useEffect(() => {
        fetch('coaches.JSON')
            .then(res => res.json())
            .then(data => setCoaches(data));
    }, [])
    return (
        <div className='Trainer'>


            {
                coaches.map(trainer => <Trainer
                    key={trainer.id}
                    coach={trainer}
                ></Trainer>)
            }

        </div >
    );
};

export default Coach;