import { Link } from "react-router-dom";

export const Navbar = () => {
return(
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/edit">Edit</Link>
            </li>
            <li>
                <Link to="/add">Add a Creator</Link>
            </li>
       
        </ul>
    </nav>
    </>
)
}