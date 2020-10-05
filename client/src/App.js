import React from 'react';
import './App.css';

import Navbar from "./components/navbar"
import Header from "./components/header"

import SearchPage from "./pages/search";
import SavedPage from "./pages/saved";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="App">
            <Navbar />
            <Header />
            <Switch>
                <Route path="/saved">
                    <SavedPage />
                </Route>
                <Route path="/">
                    <SearchPage />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}
    
    export default App;
    