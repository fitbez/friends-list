// PascalCase - to name components, components file names
// camelCase - to name utility functions, variable ...
// kebab-case - naming your file name
// snake_case - naming enums ....
import { Link } from "react-router-dom";

function Nav() {
  //PascalCase
  return (
    <>
      <nav style={StyledNav}>
        <h3>Friends List</h3>
        <ul style={StyledMenu}>
          <Link to="/" style={StyledMenuItems}>
            Home
          </Link>
          <Link to="/friends-list" style={StyledMenuItems}>
            Friends List
          </Link>
          <Link to="/login" style={StyledMenuItems}>
            Login
          </Link>
        </ul>
      </nav>
    </>
  );
}

const StyledNav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 30px",
  backgroundColor: "#11CCF4",
  boxShadow: "0px 4px 8px rgba(0, 0, 0 , 0.26)",
};

const StyledMenu = {
  display: "flex",
  gap: "10px",
  listStyle: "none",
};

const StyledMenuItems = {
  cursor: "pointer",
};

export default Nav;
