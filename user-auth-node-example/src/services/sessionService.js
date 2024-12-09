// src/services/sessionService.js

const Redis = require('ioredis');
const zlib = require('zlib');

const redis = new Redis({
    host: '127.0.0.1',
    port: 6379,
    db: 1,
});

const authenticateSession = async (req, res, next) => {
    const sessionId = req.cookies.sessionid;
    if (!sessionId) {
        return res.sendStatus(401); // No autorizado
    }

    const sessionKey = `:1:django.contrib.sessions.cache${sessionId}`;

    try {
        // Obtener los datos de la sesión desde Redis
        const sessionData = await redis.get(sessionKey);

        if (!sessionData) {
            return res.sendStatus(403); // Prohibido si no hay datos de sesión
        }

        // Intentar decodificar los datos como JSON directamente
        try {
            req.session = JSON.parse(sessionData); // Si los datos están en JSON, se parsean
            return next();
        } catch (jsonError) {
            console.log('No se pudo decodificar como JSON:', jsonError);
            return res.sendStatus(500); // Error del servidor si no es JSON
        }
    } catch (err) {
        console.log('Error al verificar la sesión en Redis:', err);
        return res.sendStatus(500); // Error del servidor
    }
};


module.exports = authenticateSession;
