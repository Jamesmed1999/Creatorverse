import { Link } from "react-router-dom";

export const Navbar = () => {
return(
    <>
    <nav aria-label="breadcrumb">
        <ul>
            <li class="secondary" >
                <Link to="/">Home</Link>
            </li>
            <li class="secondary">
                <Link to="/add">Add a Creator</Link>
            </li>
       
        </ul>
    </nav>
    </>
)
}