import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router