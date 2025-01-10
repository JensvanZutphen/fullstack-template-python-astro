// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],

	// Server configuration
	server: {
		port: 3000,
		host: '0.0.0.0', // Ensure the server binds to all interfaces
	},
});
