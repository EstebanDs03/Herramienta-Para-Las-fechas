// Devuelve el timestamp actual en milisegundos desde el 1 de enero de 1970 (Epoch)
function getTimestamp() {
  return Date.now();
}

// Devuelve la fecha y hora actual en formato largo, localizada según el parámetro 'locale'
// Por defecto, utiliza el formato español de España ("es-ES")
function getLongTime(locale = 'es-ES') {
  const options = {
    weekday: 'long',      // Día de la semana completo (ej: lunes)
    year: 'numeric',      // Año con 4 dígitos
    month: 'long',        // Nombre completo del mes
    day: 'numeric',       // Día del mes
    hour: 'numeric',      // Hora (formato 24h o 12h según la localización)
    minute: 'numeric',    // Minutos
    second: 'numeric',    // Segundos
    timeZoneName: 'short' // Nombre corto de la zona horaria (ej: GMT+2)
  };
  return new Date().toLocaleString(locale, options);
}

// Exporta las funciones para su uso en otros módulos
module.exports = {
  getTimestamp,
  getLongTime
};