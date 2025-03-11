import { Workbox } from 'workbox-window';
export const registerServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
		const wb = new Workbox('sw.js');

		wb.addEventListener('installed', (event) => {
			console.log('installed', event);
			if (event.isUpdate) {
				if (confirm('New version available! Refresh?')) {
					window.location.reload();
				}
			}
		});

		wb.register().catch((err) => console.error('SW registration failed:', err));
	}
};
