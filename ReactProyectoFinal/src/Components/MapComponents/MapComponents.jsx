import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const API_KEY = 'AIzaSyCPYxyhT8Agz6RymatEz0hRVzx0GAQi6JI'; 

const center = {
  lat: 9.981378699999999,
  lng: -84.75704309999999,
};

const MapComponent = () => {
  const [zoomLevel, setZoomLevel] = useState(18);
  return (
    <section className="map-section">
      <br /><br />
      <div className="map-container">
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={zoomLevel}
            options={{ disableDefaultUI: true }}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default MapComponent;
