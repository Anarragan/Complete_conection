# 📌 Proyecto Base - Frontend + Backend con Autenticación Básica

Este proyecto es un ejemplo básico de una aplicación **Full Stack** con **frontend** y **backend** separados.  
Incluye un flujo simple de **registro** y **login** que conecta con una base de datos para validar usuarios.  

## 🚀 Tecnologías Utilizadas

### Backend
- **Node.js** + **Express** → Servidor y API REST
- **CORS** → Permitir comunicación entre frontend y backend
- **bcrypt** → Cifrado seguro de contraseñas
- **Base de datos** → Conexión para almacenar y validar usuarios

### Frontend
- **Vite** → Entorno de desarrollo rápido para el cliente
- **Axios** → Consumo de la API del backend

---

## 📂 Estructura del Proyecto

📦 complete_conection
┣ 📂 backend
┃ ┣ 📜 server.js
┃ ┣ 📜 dataBase.js
┣ 📂 frontend
┃ ┣ 📂 src
┃ ┃ ┣ 📂 api
┃ ┃ ┃ ┣ 📜 axios.js        # Configuración de Axios
┃ ┃ ┣ 📂 auth
┃ ┃ ┃ ┣ 📜 login.js        
┃ ┃ ┃ ┣ 📜 register.js     
┃ ┃ ┣ 📂 utils             
┃ ┃ ┣ 📜 router.js         
┃ ┃ ┣ 📂 views
┃ ┃ ┃ ┣ 📜 dashboard.js    
┃ ┃ ┃ ┣ 📜 home.js         
┃ ┃ ┃ ┣ 📜 loginView.js    
┃ ┃ ┃ ┣ 📜 registerView.js 
┃ ┃ ┣ 📜 main.js           
┃ ┣ 📜 style.css     
┃ ┗ 📜 index.html

## Clonar el repositorio

```
git clone https://github.com/usuario/proyecto-base.git
cd Complete_Conection
```
## Configuracion del backend

```
cd Backend
npm install
```

### Configura tu archivo .env con los datos de tu base de datos.

```
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base
JWT_SECRET=clave_secreta
```

Para lanzar el servidor usas el comando:

```
node server.js
```

## Configurar el Frontend

```
cd ../Frontend
npm install
```

Pon la direccion URL de tu API en ```src/api/axios.js``` 

ejecuta el cliente con: 
```
npm run dev
```
🔑 Funcionalidades
✅ Página de bienvenida (home.js)
✅ Registro de usuarios (register.js) → envía datos al backend y los guarda en la BD
✅ Login de usuarios (login.js) → valida credenciales con bcrypt
✅ Dashboard básico (dashboard.js)
✅ Comunicación segura entre frontend y backend con CORS