import {NavLink} from "react-router-dom";


const Navbar = () => {
    return(
        <nav className="flex items-center justify-between px-8 py-4 bg-neutral-900 text-white">
            <div className="text-2xl font-bold">
                <a href="/" className="text-white hover:text-gray-300 transition-colors"> Imran Tsaga </a>
            </div>

            <ul className="flex gap-8 m-0 p-0 list-none">
                <li>
                    <NavLink to="/" end className="text-gray-300 hover:text-gray-400 transition-colors">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="text-gray-300 hover:text-gray-400 transition-colors">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className="text-gray-300 hover:text-gray-400 transition-colors">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="text-gray-300 hover:text-gray-400 transition-colors">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;