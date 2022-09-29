import React, { useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';

import Header from '../Header/Header';
import './Gym.css'

const Gym = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <div className="gymRoom_container">
            <div className="gym_container mt-10 ">
               <Header></Header>
               {
                products.map(product => <Fitness 
                    key={product.id}
                    product={product}
                    ></Fitness>)
               }
            </div>
            <div className="profile_container">
                <h1>Gym profile</h1>
            </div>
        </div>
    );
};

export default Gym;