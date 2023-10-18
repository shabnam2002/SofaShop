import React from 'react';
import background from "./svg/back.png";
import {Link} from "react-router-dom";
import MTab from "./MTab";
import Customers from './Customers';
import JoinInput from './JoinInput';
import Footer from './Footer';

function LandingHeader() {
 return (
   <>
     <div className="mainheader">
       <div className="backgroundheader">
         <img src={background} />
       </div>
       <div className="infotitle">
         <h1>
           بهترین <span>مبلمان</span> خود را پیدا کنید.
         </h1>
         <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
           استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
           ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
           کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
         </p>
         <Link to="/products">
           <button>خرید کنید</button>
         </Link>
       </div>
     </div>
     <MTab />
     <Customers />
     <JoinInput />
     <Footer />
   </>
 );
}

export default LandingHeader;