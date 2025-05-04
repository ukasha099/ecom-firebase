import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const { user } = useAuth();
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/admin">Admin</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </header>
  );
};

export default Header;