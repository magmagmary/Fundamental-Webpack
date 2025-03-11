import { createRoot } from 'react-dom/client';

import App from './App';

import './assets/styles/main.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { registerServiceWorker } from './service-worker-registration';

const root = createRoot(document.getElementById('root') as HTMLElement);

registerServiceWorker();

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
