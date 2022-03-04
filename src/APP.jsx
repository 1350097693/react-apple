import React, { Fragment, useEffect } from "react";
import "./index.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DiffToHtml from './demo/DiffToHtml'

export default function App() {
  useEffect(() => {});

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/diffToHtml">diffToHtml</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/diffToHtml" element={<DiffToHtml />} />
        
      </Routes>
    </Router>
  );
}

const Home = () => <h1>Home</h1>;
