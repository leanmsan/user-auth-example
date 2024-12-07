// src/config/config.js

module.exports = {
    port: process.env.PORT || 3000,
    redis: {
        host: '127.0.0.1',
        port: 6379,
        db: 1,
    },
    sessionKeyPrefix: "django.contrib.sessions.cache",  // Prefijo para las claves de sesión
};
