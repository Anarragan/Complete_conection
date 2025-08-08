import { login } from '../auth/login.js';

export default function loginView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Iniciar sesión</h1>
        <form id="login-form">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <button type="submit">Iniciar sesión</button>
        </form>
        <p>¿No tienes una cuenta? <a href="#/register">Regístrate aquí</a></p>
    `;

    div.querySelector('#login-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await login(email, password);
    });

    return div;
}