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

    const handleAddToList = () =>{
        console.log('clicked')
    }

    return (
        <div className="gymRoom_container">
            <div className="gym_container mt-10 ">
               <Header></Header>
               <h1>Select today's exercise</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                    products.map(product => <Fitness 
                        key={product.id}
                        product={product}
                        handleAddToList={handleAddToList}
                        ></Fitness>)
                    }
                </div>
            </div>
            <div className="profile_container">
                <h1>Gym profile</h1>
            </div>
        </div>
    );
};

export default Gym;