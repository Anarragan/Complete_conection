import express from 'express'; //permite levantar API rest
import cors from 'cors';
import pool from './dataBase_conection.js';
import bcrypt from 'bcryptjs'; // para encriptar contraseñas

const app = express(); // crea una instancia de express
const PORT = 6543;

app.use(express.json());
app.use(cors());

//Get method
app.get('/users', (req, res) => {
 pool.query('SELECT * FROM usuario', (err, results) => {
        if (err) {
        console.error('Error al obtener los usuarios:', err);
        return res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
        res.json(results);
    });
});

//Post method
app.post('/register', async (req, res) => {
    const { nombre, email, password} = req.body;

    try {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        await pool.query(
        `INSERT INTO usuario (nombre, email, password) 
        VALUES ($1, $2, $3)`,

        [nombre, email, hashedPassword]
    );

        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
});

//Login method
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            user: {
                id: user.id,
                nombre: user.nombre,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

//Put method
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, password} = req.body;

    pool.query(
        `UPDATE usuario
        SET nombre = $1, email = $2, password = $3 
        WHERE id = $4`,

        [nombre, email, password, id],

        (err) => {
            if (err) {
                console.error('Error al actualizar el usuario:', err);
                return res.status(500).json({ error: 'Error al actualizar el usuario' });
            }
            res.json({ message: 'Usuario actualizado con éxito' });
        }
    );
});

//Delete method
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    pool.query('DELETE FROM usuario WHERE id = $1', [id], (err) => {
        if (err) {
            console.error('Error al eliminar el usuario:', err);
            return res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
        res.json({ message: 'Usuario eliminado con éxito' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
