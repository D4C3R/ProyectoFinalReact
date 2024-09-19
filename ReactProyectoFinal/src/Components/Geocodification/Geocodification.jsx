const apiKey = 'AIzaSyCPYxyhT8Agz6RymatEz0hRVzx0GAQi6JI'; 
const address = 'X6JV+G3G, Provincia de Puntarenas, El Roble';

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    if (data.status === 'OK') {
      const location = data.results[0].geometry.location;
      console.log(`Latitud: ${location.lat}, Longitud: ${location.lng}`);
    } else {
      console.error('Error en la solicitud:', data.status);
    }
  })
  .catch(error => console.error('Error:', error));
  AIzaSyCPYxyhT8Agz6RymatEz0hRVzx0GAQi6JI
  const center = {
    lat: 9.981378699999999, 
    lng: -84.75704309999999,
  };