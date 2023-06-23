import React from 'react'
import contactPagePicture from "../../style/images/login.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function about() {
  return (
    <div className="content-pagre-wrapper">
     <div className="left-column" 
     style={{
      background: "url(" + contactPagePicture + ") no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
     }}
     />
     <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullert-point-grup">
           <div className='icon'>
           <FontAwesomeIcon icon="phone"/>
           </div>

            <div className='text'>
              +52 636 101 05 75
            </div>
          </div>

          <div className="bullert-point-grup">
           <div className='icon'>
           <FontAwesomeIcon icon="envelope"/>
           </div>

            <div className='text'>
              @amymolina.com
            </div>
          </div>

          <div className="bullert-point-grup">
           <div className='icon'>
           <FontAwesomeIcon icon="map-marked-alt"/>
           </div>

            <div className='text'>
              Col. LeBaron
            </div>
          </div>


        </div>
     </div>
    </div>
  );
}
