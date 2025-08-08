export default function dashboardView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Dashboard</h1>
        <p>Has iniciado sesion correctamente.</p>
        <a href="/">Ir a inicio</a>
    `;
    return div;
}