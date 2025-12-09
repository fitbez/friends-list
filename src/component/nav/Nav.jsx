// PascalCase - to name components, components file names
// camelCase - to name utility functions, variable ...
// kebab-case - naming your file name
// snake_case - naming enums ....
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FriendsListContext } from "../../FriendsListContext";

function Nav() {
  const { isAuthenticated, handleLogout } = useContext(FriendsListContext);
  //PascalCase
  return (
    <>
      <nav style={StyledNav}>
        <h3>Friends List</h3>
        <ul style={StyledMenu}>
          <Link to="/" style={StyledMenuItems}>
            Home
          </Link>
          {isAuthenticated && (
            <Link to="/friends-list" style={StyledMenuItems}>
              Friends List
            </Link>
          )}
          <Link to="/counties" style={StyledMenuItems}>
            Countries
          </Link>
          <Link
            to="/login"
            style={StyledMenuItems}
            onClick={() => {
              if (isAuthenticated) {
                handleLogout();
              }
            }}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Link>
          {isAuthenticated && (
            <Link to="/add-friend" style={StyledMenuItems}>
              Add Friend
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/register" style={StyledMenuItems}>
              Register
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
}

const StyledNav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 30px",
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
  color: "#fff",
};

export default Nav;
