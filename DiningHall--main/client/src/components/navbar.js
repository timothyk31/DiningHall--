import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { useCookies } from "react-cookie";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.clear();
        navigate("/auth");
      };

return (
      <div className="navbar">
        <p className="project-name">DiningHall!</p>
          <Link to="/" className="nav-link">Breakfast</Link>
          <Link to="/lunch" className="nav-link">Lunch</Link>
          <Link to="/dinner" className="nav-link">Dinner</Link>
          {!cookies.access_token ? (
        <Link to="/auth" id="userAuth" className="nav-link form-button auth-button">Login/Register</Link>
        ) : (
            <button onClick={logout} className="nav-link form-button auth-button" id="userAuth"> Logout </button>
        )}
      </div>
      ) 

  };
