import React , {useState , useContext} from 'react';
import { DataContext } from './Context';
import {Link} from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import Menu from "../components/svg/bars-solid.svg";
import Close from "../components/svg/times-solid.svg";
import Logo from "../components/svg/logo.jpg";



function Header() {

const [menu, setMenu] = useState(false);

const toggleMenu = () => {
  setMenu(!menu);
};

const styleMenu = {
  right: menu ? 0 : "-100%",
};


 const value = useContext(DataContext);
 const [cart] = value.cart;

 return (
   <header>
     <div className="menu" onClick={toggleMenu}>
       <img src={Menu} width="30" alt="" />
     </div>
     <div className="logo">
       <img src={Logo} width="50" alt="" />
     </div>
     <ul style={styleMenu}>
       <li>
         <Link to="/home">خانه</Link>
       </li>
       <li>
         <Link to="/products">محصولات</Link>
       </li>
       <li>
         <Link to="/aboutus">درباره ما</Link>
       </li>
       <li>
         <Link to="/callus">تماس با ما</Link>
       </li>
       <li>
         <Link to="/login">ثبت نام / ورود</Link>
       </li>
       <li>
         {" "}
         <img src={Close} width="30" onClick={toggleMenu} className="menu" />
       </li>
     </ul>

     <div className="cart-icon">
       <span className='numproduct'>{cart.length}</span>
       <Link to="/cart">
         <FaShoppingBag />
       </Link>
     </div>
   </header>
 );
}

export default Header;