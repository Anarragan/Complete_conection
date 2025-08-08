import { register } from '../auth/register.js';

export default function registerView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Registrarse</h1>
        <form id="registerForm">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes una cuenta? <a href="#/login">Iniciar sesión</a></p>
    `;

    div.querySelector('#registerForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await register(username, email, password);
    });

    return div;
}