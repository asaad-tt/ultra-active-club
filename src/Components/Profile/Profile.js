import React from 'react';
import './Profile.css'

const Profile = (props) => {
    const {profile} = props;
    // console.log(profile);
    let total = 0;
    for(const item of profile){
        total = total + item.timeRequired;
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

            <div className='break'>

            </div>

            <div className="exercise_details">
                <h2>Exercise Details</h2>
                
                <p className="bg-blue-400 py-4 px-4 text-black font-semibold">Exercise time: <span className="ml-10 text-gray-700">{total}</span><span className='text-gray-700 ml-1'>sec</span></p>

            </div>
            
                
        </div>
    );
};

export default Profile;