// vite.config.ts أو vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					react: ['react', 'react-dom'],
					drei: ['@react-three/drei'],
					three: ['three'],
				},
			},
		},
	},
});
