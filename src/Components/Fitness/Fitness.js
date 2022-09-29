import React from 'react';

const Fitness = (props) => {
    console.log(props.product);
    const {id, timeRequired, img, name} = props.product;
    return (
        <div>
            <h1>i am fitness trainer</h1>
        </div>
    );
};

export default Fitness;