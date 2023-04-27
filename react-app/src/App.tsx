import { Route, Routes, Navigate } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import FormsPage from './pages/FormsPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="forms" element={<FormsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Provider>
  );
}

export default App;
