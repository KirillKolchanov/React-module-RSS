import { Route, Routes, Navigate } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="about" element={<About />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
}

export default App;
