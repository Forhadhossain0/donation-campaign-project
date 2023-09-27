import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink className=" rounded-sm px-3 py-3" to="/">
         Home
        </NavLink>
      </li>
      <li>
        <NavLink className=" rounded-sm px-3 py-3" to="/donation">
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink className=" rounded-sm px-3 py-3" to="/statistics">
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar text-black font-bold  relative z-10">
        <div className="lg:navbar-start  ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-goast text-white  lg:hidden">
              <svg  className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  stroke="currentColor"  >
                <path    strokeWidth="3"  d="M4 6h16M4 12h8m-8 6h16"  />  </svg>
            </label>
            <ul  tabIndex={0}  className="menu menu-md dropdown-content mt-3 z-[1]   shadow-xl  rounded-none w-56" >
              {links}
            </ul>
          </div>
            <div className="sm:text-right "><img className="sm:text-right" src="../../Resources/Logo.png" alt="" /></div>
        </div>

        <div className="navbar-end hidden lg:flex horizontalli my-auto">
          <ul className="menu menu-horizontal  rounded-sm  ">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
