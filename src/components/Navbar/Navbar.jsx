import { NavLink } from "react-router-dom";
import logo from "../../assets/images/favicon.png";

const Navbar = () => {
    return (
        <div className="bg-[#181a25] border-b border-[#51555e]">
            <div className="max-w-7xl mx-auto px-10">
                <NavLink to="/" className="inline-flex items-center py-5">
                    <img src={logo} alt="Logo" />
                    <h2 className="font-bold text-lg md:text-3xl text-gray-200 ml-1">Google Flights</h2>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;