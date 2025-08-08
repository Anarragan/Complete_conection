import router from './utils/router.js';
import './style.css';

console.log('Frontend is running');
window.addEventListener('DOMContentLoaded', () => {
  router();
  window.addEventListener('hashchange', router)
});