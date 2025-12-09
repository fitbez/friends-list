import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FriendsListContext = createContext();

export const FriendsListProvider = (props) => {
  const [friendsInfo, setFriendsInfo] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("token")
  );
  const [isAddSuccess, setAddSuccess] = useState(false);

  const navigate = useNavigate();

  const getFriends = async () => {
    const url = "http://localhost:8080/api/friends";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setFriendsInfo(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getFriends();
    }
  }, [isAuthenticated]);

  const handleSave = async (form) => {
    const url = "http://localhost:8080/api/friends";
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setAddSuccess(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRegister = async (form) => {
    const url = "http://localhost:8080/api/auth/signup";
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogin = async (form) => {
    const url = "http://localhost:8080/api/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        navigate("/friends-list");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log("isAuthenticated", isAuthenticated);

  const handleLogout = () => {
    console.log("before logout");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <FriendsListContext.Provider
      value={{
        friendsInfo,
        handleSave,
        handleRegister,
        handleLogin,
        isAuthenticated,
        handleLogout,
        isAddSuccess,
      }}
    >
      {props.children}
    </FriendsListContext.Provider>
  );
};
