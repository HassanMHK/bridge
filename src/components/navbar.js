import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <nav className="flex justify-between bg-gray-800 p-4">
            <div>
            <Link to="/"><h2 className="text-white text-2xl font-bold cursor-pointer hover:text-gray-300 me-4">Bridge</h2></Link>
            </div>
            <ul className="flex items-center space-x-6">
                <li className="text-white hover:text-gray-300">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-gray-300">
                    <Link to="/about">About</Link>
                </li>
                <li className="text-white hover:text-gray-300">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="text-white hover:text-gray-300">
                    <Link to="/pricing">Pricing</Link>
                </li>
                <div className="my-0 py-0">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Register now</button>
                </div>
            </ul>
        </nav>
    );

}

export default Navbar;