import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/Auth");
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>

      <Link to="/Create">Create Recipe</Link>
      
      {!cookies.access_token ? (
        <Link to="/Auth">Login/Register</Link>
      ) : ( <>
      <Link to="/Save">Saved Recipes</Link>
        <button onClick={logout}>Log out</button>
        </>
      )}
    </div>
  );
}

export default Navbar;
