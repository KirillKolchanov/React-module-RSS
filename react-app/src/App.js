import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
// import Home from './pages/Home';
// import PageNotFound from './pages/PageNotFound';
// import Layout from './components/Layout';
function App() {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
        React.createElement(Route, { path: "/home", element: React.createElement(Home, null) }),
        React.createElement(Route, { path: "about", element: React.createElement(About, null) }),
        React.createElement(Route, { path: "*", element: React.createElement(PageNotFound, null) })));
}
export default App;
