import React from "react";
import { Link } from 'react-router-dom';

const MaidProfiles = (props) =>{
    const { name, nationality, salery, position, _id, maidImg} = props.data;
    return(
        <div dir="ltr" className="flex items-center w-full justify-between text-white text-sm rounded-3xl" key={props.i} style={{padding:"2rem 1rem", height: "13.125rem", width:"100%", background: "#253061" }}>
        <div className="profile-of-maid w-full h-full sm:mr-6 mr-2 rounded-3xl overflow-hidden">
        
            <div className="h-full bg-cover" style={{backgroundPosition:"start" ,width:"100%", backgroundImage: `url(https://res.cloudinary.com/dtcz2zuev/image/upload/${maidImg})` }}>
            </div>
        </div>
        <div className="data-of-maid w-full flex flex-col items-center scale-90 sm:scale-100">
        <div><p className="">{name}</p></div>
        <div className="bg-white px-4 py-1 rounded-md" style={{color:"#253061"}}>
            {position}
        </div>
        <div className="card-list">
            <ul>
                <li>Nationality: <span>{nationality}</span></li>
                <li><span>Full Time</span></li>
                <li>Monthly Salery: <span>{salery} OMR</span></li>
            </ul>
        </div>
        <div className="bg-white px-2 py-1 rounded-md" style={{color:"#253061", fontSize:".75rem"}}>
            <Link to={`/maid-detail/${_id}`}>See Full Profile</Link>
        </div>
        </div>
      </div>
    )
}

export default MaidProfiles;