/**
 * KPSS Defterim — Application Entry Point
 *
 * This is the main entry point for the application.
 * Phase 1: Minimal setup to verify build system works.
 * Subsequent phases will initialize the full application.
 */

const APP_VERSION = '1.0.0';

function bootstrap(): void {
  const app = document.getElementById('app');
  if (!app) {
    throw new Error('Root element #app not found');
  }

  if (import.meta.env.DEV) {
    console.info(`[KPSS Defterim] v${APP_VERSION} — Development mode`);
  }
}

document.addEventListener('DOMContentLoaded', bootstrap);
