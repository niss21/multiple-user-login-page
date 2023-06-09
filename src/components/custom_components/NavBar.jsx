import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FaUser } from "react-icons/fa";
import MenuBar from "./MenuBar";
import Button from "./Buttton";
import "./NavBar.css";

function NavBar({ hasLoggedIn, setHasLoggedIn }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
      {!hasLoggedIn && (
        <div className="nav-buttons">
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        </div>
      )}
      {hasLoggedIn && (
        <div className="nav-buttons">
          <div
            onClick={() => setShowMenu((prev) => !prev)}
            className="user-profile"
          >
            <FaUser size={26} color="purple" />
            <AnimatePresence>
              {showMenu && (
                <MenuBar
                  setShowMenu={setShowMenu}
                  setHasLoggedIn={setHasLoggedIn}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
