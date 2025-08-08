import loginView from '../views/loginView.js';
import registerView from '../views/registerView.js';
import dashboardView from '../views/dashboardView.js';
import homeView from '../views/home.js';

const routes = {
    '/': homeView,
    '/login': loginView,
    '/register': registerView,
    '/dashboard': dashboardView
};

export default function router() {
    const path = location.hash.slice(1) || '/';
    const view = routes[path] || homeView;
    const app = document.getElementById('app');

    app.innerHTML = '';
    app.appendChild(view());
}