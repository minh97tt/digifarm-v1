import { useState } from 'react';
import {
  GoogleMap,
  Polygon,
  InfoWindow,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: 20,
};

const center = {
  lat: 10.776889, // Replace with your desired center
  lng: 106.700806,
};

const polygonCoords = [
  { lat: 10.776, lng: 106.700 },
  { lat: 10.777, lng: 106.702 },
  { lat: 10.779, lng: 106.701 },
  { lat: 10.778, lng: 106.699 },
];

const MapWithPolygon = () => {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<google.maps.LatLngLiteral | null>(null);

  return (
    <div className='mt-6'>
      <div className='text-text-primary font-bold  text-xl mb-4'>Toạ độ</div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center} zoom={15}
      >
        <Polygon
          paths={polygonCoords}
          options={{
            fillColor: '#00FF00',
            fillOpacity: 0.4,
            strokeColor: '#00FF00',
            strokeOpacity: 1,
            strokeWeight: 2,
          }}
          onMouseOver={(e) => {
            setHovered(true);
            setHoverPosition({
              lat: e.latLng?.lat() ?? 0,
              lng: e.latLng?.lng() ?? 0,
            });
          }}
          onMouseOut={() => {
            setHovered(false);
            setHoverPosition(null);
          }}
        />

        {hovered && hoverPosition && (
          <InfoWindow position={hoverPosition} onCloseClick={() => setHovered(false)}>
            <div>🌿 Cho tôi xin thông tin nhé</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapWithPolygon;
