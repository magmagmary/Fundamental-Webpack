import { Workbox } from 'workbox-window';
export const registerServiceWorker = async () => {
	if (process.env.NODE_ENV === 'development') {
		return;
	}

	if ('serviceWorker' in navigator) {
		const wb = new Workbox('service-worker.js');

		wb.addEventListener('installed', (event) => {
			if (event.isUpdate) {
				if (confirm('New version available! Refresh?')) {
					window.location.reload();
				}
			}
		});

		wb.register().catch((err) => console.error('SW registration failed:', err));
	}
};
