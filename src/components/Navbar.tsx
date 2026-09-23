

const Navbar = () => {
    return(
        <nav className="flex items-center justify-between px-8 py-4 bg-neutral-900 text-white">
            <div className="text-2xl font-bold">
                <a href="/" className="text-white hover:text-gray-300 transition-colors"> Imran Tsaga </a>
            </div>

            <ul className="flex gap-8 m-0 p-0 list-none">
                <li>
                    <a href= "#home" className="text-gray-300 hover:text-gray-400 transition-colors">Home</a>
                </li>
                <li>
                    <a href= "#about" className="text-gray-300 hover:text-gray-400 transition-colors">About</a>
                </li>
                <li>
                    <a href= "#projects" className="text-gray-300 hover:text-gray-400 transition-colors">Projects</a>
                </li>
                <li>
                    <a href= "#contact" className="text-gray-300 hover:text-gray-400 transition-colors">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;