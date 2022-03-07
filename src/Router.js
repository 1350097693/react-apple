import React from "react";
import { Route,Switch,Routes } from "react-router-dom";
import DiffToHtml from './demo/DiffToHtml'

export default function Router() {
    return (
        <Routes>
            <Route path="/DiffToHtml" element={<DiffToHtml/>} />
        </Routes>
    )
}