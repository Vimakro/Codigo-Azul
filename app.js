const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '149.50.129.246',
    port: '3306',
    user: 'bananirou',
    database: 'codigo_azul'
});

function obtenerDatos() {
    connection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            return;
        }
        console.log('Conexión exitosa a la base de datos MySQL');
    
        connection.query('SELECT mail, clave FROM usuario', (error, results, fields) => {
            if (error) {
            console.error('Error al realizar la consulta:', error);
            return;
            }
        
            const usuario = results.map((row) => [row.mail, row.clave]);
            console.log(usuario);
            connection.end((err) => {
            if (err) {
                console.error('Error al cerrar la conexión:', err);
                return;
            }
            console.log('Conexión cerrada exitosamente');
            });
    
            return usuario;
        });
    });
}

obtenerDatos();


