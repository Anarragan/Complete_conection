// auth/login.js
import axios from '../api/axios.js';

export async function login(email, password) {
    try {
        const response = await axios.post('/login', { email, password });
        alert('Inicio de sesión exitoso');
        location.hash = '/dashboard';
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        alert('Correo o contraseña incorrectos');
    }
}
