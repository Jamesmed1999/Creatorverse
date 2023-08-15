import { Link } from "react-router-dom";
import "../pages/newcss.css"
export const Navbar = () => {
return(
    <>

    <center><div id="logo"></div></center>
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