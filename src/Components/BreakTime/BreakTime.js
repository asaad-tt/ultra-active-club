import React from 'react';

const BreakTime = (props) => {
    // console.log(props)
    const {singleTime, handleBreakTime} = props;
    // console.log(singleTime);
   
    return (
        <div className="px-3 ">
            <p onClick={()=>handleBreakTime(singleTime)}  className="bg-primary cursor-pointer p-1 rounded-full">{singleTime}</p>
        </div>
    );
};

export default BreakTime;