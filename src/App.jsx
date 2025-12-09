import "./App.css";
import Nav from "./component/nav/Nav";
import CountriesPage from "./pages/countries-page/ContriesPage";
import LoginPage from "./pages/login-page/login-page";
import HomePage from "./pages/home-page/home-page";
import FriendsListPage from "./pages/friends-list-page/friends-list-page";
import ProtectedRoute from "./component/protected-route/protected-route";

import { Routes, Route } from "react-router-dom";
import AddFriendPage from "./pages/add-friend-page/add-friend-page";
import RegisterPage from "./pages/register-page/register-page";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* public route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/counties" element={<CountriesPage />} />
        {/* protected routes */}
        <Route
          path="/friends-list"
          element={
            <ProtectedRoute>
              <FriendsListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-friend"
          element={
            <ProtectedRoute>
              <AddFriendPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
