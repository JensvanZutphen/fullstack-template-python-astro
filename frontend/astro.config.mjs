// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte(), sentry(), spotlightjs()],

	// Server configuration
	server: {
		port: 3000,
		host: '0.0.0.0', // Ensure the server binds to all interfaces
	},
});
