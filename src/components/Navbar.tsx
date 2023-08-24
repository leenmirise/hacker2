import { Nav, Button } from '../styles/style'
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const refreshPage = ()=>{
        navigate('/', { replace: true });
    }

    return (
        <Nav>
            <Link to="/posts" style={{cursor: "pointer",
                color: "black",
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold"
            }}>Hacker News</Link>
            <Button onClick={refreshPage}>Update</Button>
        </Nav>
    );
};

export default Navbar;
