import React from "react";
import DefaultLayout from "./components/layouts/defaultLayout/DefaultLayout";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<Login />}/>
            </Route>
        </Routes>
    );
}

export default App;
