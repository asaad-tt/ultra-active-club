import React, { useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import './Profile.css'

const Profile = (props) => {
    const [time, setTime] = useState(0);

    const {profile} = props;
    // console.log(profile);
    let total = 0;
    for(const item of profile){
        total = total + item.timeRequired;
    }
     
    const breakTime = ['10s', '20s', '30s', '40s', '50s']

    const handleBreakTime = (singleTime) =>{
        // console.log(singleTime);
        setTime(singleTime);
    }

    return (
        <div className='profile_section m-5'>
            <div className="flex"> 
                <img className="w-16 rounded" src="https://i.ibb.co/kX0DDXc/287963369-106020238814895-4210129157693858149-n.jpg" alt="" />
                <div className="ml-5">
                    <h3 className="text-2xl font-bold">Asaad Zaman </h3>
                    <p>Traveller</p>
                </div>
            </div>

            <div className="flex bg-gray-100 text-black mt-5">
                <div>
                    <p>68<small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div className="ml-3">
                    <p>6.5</p>
                    <p>Height</p>
                </div>
                <div className="ml-3">
                    <p>25 <small>years</small></p>
                    <p>age</p>
                </div>
            </div>

            <div className='flex break my-5 bg-gray-100 text-black p-4'>
                {
                    breakTime.map(singleTime=> <BreakTime
                    key={singleTime} 
                    singleTime={singleTime}
                    handleBreakTime={handleBreakTime}
                    ></BreakTime>)
                }
                
            </div>

            <div className="exercise_details">
                <h2>Exercise Details</h2>
                
                <p className="bg-blue-400 py-4 px-4 text-black font-semibold rounded">Exercise time: <span className="ml-10 text-gray-700">{total}</span><span className='text-gray-700 ml-1'>sec</span></p>

            </div>

            <div className="break_time mt-4">
    
                <p className="bg-blue-400 py-4 px-4 text-black font-semibold rounded">Break time: {time}<span className="ml-10 text-gray-700"></span></p>

            </div>
            
                
        </div>
    );
};

export default Profile;