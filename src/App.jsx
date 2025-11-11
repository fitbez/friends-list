import { useState } from "react";
import "./App.css";
import Nav from "./component/nav/Nav";
import CountriesPage from "./pages/countries-page/ContriesPage";
import LoginPage from "./pages/login-page/login-page";
import HomePage from "./pages/home-page/home-page";
import FriendsListPage from "./pages/friends-list-page/friends-list-page";

import { Routes, Route } from "react-router-dom";

function App() {
  const friendsInfo = [
    {
      id: 1,
      name: "John Doe",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      occupation: "Civil Engineer",
      age: "28",
      phone: "123456790",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Metin Kale",
      profilePicture:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      occupation: "Singer",
      age: "22",
      phone: "123456790",
      email: "metin@gmail.com",
    },
    {
      id: 3,
      name: "Donell Erik",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      occupation: "Architect",
      age: "26",
      phone: "123456790",
      email: "donell@gmail.com",
    },
    {
      id: 4,
      name: "Matteo Khalid",
      profilePicture:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      occupation: "Web Developer",
      age: "30",
      phone: "123456790",
      email: "matteo@gmail.com",
    },
    {
      id: 5,
      name: "Mike Kevin",
      profilePicture:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      occupation: "Web Developer",
      age: "33",
      phone: "123456790",
      email: "mike@gmail.com",
    },
    {
      id: 6,
      name: "Alla Ameer",
      profilePicture:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      occupation: "Web Developer",
      age: "23",
      phone: "123456790",
      email: "alla@gmail.com",
    },
  ];

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counties" element={<CountriesPage />} />
        <Route
          path="/friends-list"
          element={<FriendsListPage data={friendsInfo} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
