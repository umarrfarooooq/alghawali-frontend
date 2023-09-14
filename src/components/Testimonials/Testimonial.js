import React from "react";
import commaSvg from "./img/comma.svg"
// import firstClient from "./img/first.svg"

const Testimonial = (props)=>{
    return(
        <>
            <div className="testimonialBox">
              <img src={commaSvg} alt="comma"/>
            </div>
            <div className="font-semibold mt-4">
            {props.testimonial.msg}
            </div>
            <div className="flex items-center mt-8">
              {/* <div>
                <img src={firstClient} alt="testimonialPic"/>
              </div> */}
              <div className="">
                <div className="font-semibold">
                  {props.testimonial.name}
                </div>
                <div>{props.testimonial.position}</div>
              </div>
            </div>
        </>
        
    )
}
export default Testimonial;