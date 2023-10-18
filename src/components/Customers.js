import React from 'react';
import customimg from "./svg/customers.jpg";

function Customers() {
 return (
   <div className="customersmain">
     <img src={customimg} />
     <div className="customersdesc">
       <h2>خرید مبل مدرن از ما</h2>
       <p>
         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
         از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
         سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
         کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، 
       </p>
     </div>
   </div>
 );
}

export default Customers;