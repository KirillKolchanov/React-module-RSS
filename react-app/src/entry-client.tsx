import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
