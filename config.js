// config.example.js - Ejemplo de configuración
// Copia este archivo como config.js y rellena con tus datos reales

const CONFIG = {
    // Obtén tu token desde: https://developers.facebook.com/docs/instagram-basic-display-api
    INSTAGRAM_ACCESS_TOKEN: '',
    
    // ID de usuario de Instagram (puedes obtenerlo con la API)
    INSTAGRAM_USER_ID: '',
    
    INSTAGRAM_POST_LIMIT: 6,
    INSTAGRAM_API_BASE: 'https://graph.instagram.com',
    IS_DEVELOPMENT: true
};

window.APP_CONFIG = CONFIG;