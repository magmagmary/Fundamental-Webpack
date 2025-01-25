import { createRoot } from 'react-dom/client';

import App from './App';

import './assets/styles/main.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
