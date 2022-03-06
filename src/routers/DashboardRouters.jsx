import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from '../components/dashboard/Dashboard';
import { Login } from '../components/login/login';
import { Marvel } from '../components/marvel/marvel';
import { AppRouters } from './AppRouters';

export const DashboardRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/marvel" element={<Marvel />} />

                <Route path="/*" element={<AppRouters />} />
            </Routes>
        </BrowserRouter>
    )
}

