const formatDate = date => {
    const options = {weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'};
    return date.toLocaleDateString('es-ES', options);
}
module.exports = formatDate;