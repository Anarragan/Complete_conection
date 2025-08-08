// auth/register.js
import axios from '../api/axios.js';

export async function register(username, email, password) {
    try {
        const response = await axios.post('/register', {
            nombre: username,
            email,
            password
        });

        if (response.status === 201) {
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            location.hash = '/login';
        }
    } catch (error) {
        console.error('Error al registrarse:', error);
        alert('Error al registrarse. Por favor, inténtalo de nuevo.');
    }
}
