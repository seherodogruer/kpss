/**
 * KPSS Defterim — Application Entry Point
 *
 * Imports styles, creates the App instance, and bootstraps
 * the application when the DOM is ready.
 */

import './styles/main.css';
import { App } from './app/App';

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
