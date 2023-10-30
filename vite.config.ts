/// <reference types="vitest" />
import { defineConfig } from 'vite'
import angular from '@analogjs/vite-plugin-angular'

export default defineConfig({
  build: {
    target: ['es2020'],
  },
  plugins: [angular()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setup-test.ts'],
  },
})
