export default function homeView() {
    const div = document.createElement('div');
    div.innerHTML = `

        <h1>Bienvenido al registro de actividades</h1>
        <a haref="#/login">Iniciar sesión</a> |
        <a href="#/register">Registrarse</a>
        
        `;
    return div;
}