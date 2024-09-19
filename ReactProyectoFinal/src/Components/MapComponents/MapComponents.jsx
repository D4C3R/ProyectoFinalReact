
import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const API_KEY = ' AIzaSyCPYxyhT8Agz6RymatEz0hRVzx0GAQi6JI'; 

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 9.981378699999999,
    lng: -84.75704309999999,
};

const MapComponent = () => {
    const [zoomLevel, setZoomLevel] = useState(18);


    const increaseZoom = () => setZoomLevel(prevZoom => Math.min(prevZoom + 1, 21));

    const decreaseZoom = () => setZoomLevel(prevZoom => Math.max(prevZoom - 1, 0));

    return (
        <section>
        <br /><br />
        <div>
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoomLevel}
                    options={{ disableDefaultUI: true }}
                >
                    <MarkerF position={center} />
                </GoogleMap>
            </LoadScript>

            <div style={{ marginTop: '10px' }}>
                <button onClick={increaseZoom}>+</button>
                <button onClick={decreaseZoom}>-</button>
            </div>
        </div>
        </section>
    );
};

export default MapComponent;

