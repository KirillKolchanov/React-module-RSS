import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import './styles/index.css';

import App from './App';

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
};
