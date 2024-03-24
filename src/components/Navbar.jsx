
import { Link } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs';


const Navbar = () => {
 
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/man">Man</Link></li>
        <li><Link to="/woman">Woman</Link></li>
        <li><Link to="/other">Others</Link></li> 
        <li><Link to="/dashboard">
            <button className="btn">
                <BsCart3></BsCart3>
                <div className="badge badge-secondary">+0</div>
            </button>
        </Link></li>


    </>
    return (
        <>
            <div className="navbar z-10 bg-black bg-opacity-30 text-white fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-slate-900">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">My Outlook</a>
                </div>
                <div className="navbar-center hidden lg:flex bg-slate-900">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to='/login'> <a className="btn">Login</a></Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;