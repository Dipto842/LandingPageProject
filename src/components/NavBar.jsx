import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import '../Style/style.css';
const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 font_regular">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li>Home </li>
      <li>Shop </li>
      <li>Blogs </li>
      <li>Contact </li>
       
     
      </ul>
    </div>
   
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-7 px-1">
      <li>Home </li>
      <li>Shop </li>
      <li>Blogs </li>
      <li>Contact </li>
     
   
    </ul>
  </div>
  </div>
  <div className="navbar-end ">
   <div className="flex items-center gap-5">
    {/* Login */}
    <button className="flex  items-center gap-1">Login <span className="text-2xl"><BsPerson /></span></button>
{/* search */}
    <button className="text-2xl"><CiSearch /></button>
    {/* Shopping card */}
    <button className="text-2xl"><CiShoppingCart /></button>
   </div>
  </div>
</div>
        </div>
    );
};

export default NavBar;