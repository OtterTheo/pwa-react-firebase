import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to="/login">Connexion</NavLink>
        <NavLink to="/register">Créer un compte</NavLink>
      </nav>
    </>
  );
};

export default Nav;
