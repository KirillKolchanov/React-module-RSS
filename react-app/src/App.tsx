import React, { JSXElementConstructor } from 'react'
import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
// import Home from './pages/Home';
// import PageNotFound from './pages/PageNotFound';
// import Layout from './components/Layout';

function App(): JSX.Element {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
