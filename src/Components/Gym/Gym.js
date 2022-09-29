import React, { useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Gym.css'

const Gym = () => {
    const [products, setProducts] = useState([]);
    const [profile, setProfile] = useState([]);
    

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToProfile = (product) =>{
        // console.log(product);
        const newProfile = [...profile, product];
        setProfile(newProfile);
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
                        handleAddToProfile={handleAddToProfile}
                        ></Fitness>)
                    }
                </div>
            </div>
            <div className="profile_container">
                <Profile profile={profile}></Profile>
            </div>
        </div>
    );
};

export default Gym;