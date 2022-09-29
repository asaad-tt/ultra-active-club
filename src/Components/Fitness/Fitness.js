import React from 'react';

const Fitness = (props) => {
    // console.log(props);
    const { id, timeRequired, img, name } = props.product;
    const {handleAddToList} = props;

   

    return (
        <div >
            
            <div>
                <div className="card w-full h-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img  src={img} alt="Shoes" className="h-44 w-96 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Time required: {timeRequired}</p>
                        <div className="card-actions">
                            <button onClick={handleAddToList}  className="btn btn-primary">Add to list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fitness;