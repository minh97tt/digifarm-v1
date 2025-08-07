import { useState } from 'react';
import {
  GoogleMap,
  Polygon,
  InfoWindow,
} from '@react-google-maps/api';


import boundaries from '../assets/boundaries';
import RedAlertIcon from '../assets/farm/red-alert.gif'
import WanringIcon from '../assets/farm/warning.png'

const containerStyle = {
  width: '100%',
  height: '480px',
  borderRadius: 20,
};

// Calculate center based on the first feature in boundaries
const firstFeature = boundaries.features[6];
const firstCoordinate = firstFeature?.geometry.coordinates[0][0];

const center = {
  lat: firstCoordinate ? firstCoordinate[1] : 10.776889, // Use latitude from boundaries or default
  lng: firstCoordinate ? firstCoordinate[0] : 106.700806, // Use longitude from boundaries or default
};

// Function to convert GeoJSON coordinates to Google Maps LatLng format
const convertCoordinatesToLatLng = (coordinates: number[][]) => {
  return coordinates.map(coord => ({
    lat: coord[1], // GeoJSON format is [longitude, latitude]
    lng: coord[0]
  }));
};

// Color palette for polygons
const colorPalette = [
  { fillColor: '#4CAF50', strokeColor: '#388E3C' }, // Green
  { fillColor: '#2196F3', strokeColor: '#1976D2' }, // Blue
  { fillColor: '#FFC107', strokeColor: '#FFA000' }, // Amber
  { fillColor: '#F44336', strokeColor: '#D32F2F' }, // Red
  { fillColor: '#9C27B0', strokeColor: '#7B1FA2' }, // Purple
  { fillColor: '#FF9800', strokeColor: '#F57C00' }, // Orange
  { fillColor: '#795548', strokeColor: '#5D4037' }, // Brown
  { fillColor: '#607D8B', strokeColor: '#455A64' }, // Blue Grey
  { fillColor: '#E91E63', strokeColor: '#C2185B' }, // Pink
  { fillColor: '#009688', strokeColor: '#00796B' }, // Teal
];

// Function to get a color from the palette based on index
const getColorFromPalette = (index: number) => {
  return colorPalette[index % colorPalette.length];
};

const MapWithPolygon = () => {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [activeFeature, setActiveFeature] = useState<any>(null);
  const seedingData = boundaries.seeding;
  const tillageData = boundaries.tillage;
  // const applicationData = boundaries.sample_data;

  return (
    <div className='mt-6 col-span-1 md:col-span-2'>
      <div className='text-text-primary font-bold  text-xl mb-4'>Vị trí vùng trồng</div> 
      <GoogleMap
        // mapTypeId="satellite"
        mapContainerStyle={containerStyle}
        center={center} zoom={13}
      >
        {/* Map through each feature in the boundaries data */}
        {boundaries.features.map((feature, index) => {
          // Convert GeoJSON coordinates to Google Maps LatLng format
          const paths = convertCoordinatesToLatLng(feature.geometry.coordinates[0]);

          // Get color from palette based on index
          const { fillColor, strokeColor } = getColorFromPalette(index);

          return (
            <Polygon
              key={feature.properties.FIELD_ID || index}
              paths={paths}
              options={{
                fillColor,
                fillOpacity: 0.6,
                strokeColor,
                strokeOpacity: 1,
                strokeWeight: 1,
              }}
              onMouseOver={(e) => {
                setHovered(true);
                setActiveFeature(feature);
                setHoverPosition({
                  lat: e.latLng?.lat() ?? 0,
                  lng: e.latLng?.lng() ?? 0,
                });
              }}
              onMouseOut={() => {
                setHovered(false);
                setActiveFeature(null);
                setHoverPosition(null);
              }}
            />
          );
        })}


        {hovered && hoverPosition && activeFeature && (
          <InfoWindow
            options={{
              // pixelOffset: new window.google.maps.Size(0, -10),
              maxWidth: 400,
              headerDisabled: true,
              // You cannot set full CSS here, but some layout things can be tweaked
            }}
            position={hoverPosition}
            onCloseClick={() => setHovered(false)}
          >
            <div className="w-[360px]">
              {/* <div>Mã ruộng: {activeFeature.properties.FIELD_NAME}</div> */}
              <div className='bg-gray-100 p-2 rounded-lg space-y-1'>
                <h1 className='font-bold mb-2'>Thông tin canh tác:</h1>

                <div>🌱 <b>Giống cây trồng:</b> Mía K{seedingData.properties.Variety}</div>
                <div>📅 <b>Ngày gieo:</b> {seedingData.properties.Time}</div>
                <div>🏔️ <b>Độ cao:</b> {seedingData.properties.Elevation} m</div>
                <div>💨 <b>Tốc độ gió:</b> {tillageData.properties.WINDSPEED} km/h</div>
                <div className="flex items-center gap-1">
                  <span>🌡️ <b>Nhiệt độ:</b> {tillageData.properties.AIRTEMP} độ C</span>
                  <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#FFD6D3] bg-[#FFF1F0] rounded-[12px] text-[10px] text-[#F5222D] px-1 leading-[15px]">
                    <img
                      className="w-[14px] h-[14px] inline"
                      src={RedAlertIcon}
                      alt="Alert"
                    />
                    <span>Nhiệt độ quá thấp, ảnh hưởng vùng trồng</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💧 <b>Độ ẩm:</b> {tillageData.properties.HUMIDITY}%</span>
                  <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#FFD6D3] bg-[#FFF1F0] rounded-[12px] text-[10px] text-[#F5222D] px-1 leading-[15px]">
                    {' '}
                    <img
                      className="w-[10px] inline-block"
                      src={WanringIcon}
                      alt="Wanring"
                    />
                    <span>Độ ẩm cao, không tốt cho vùng trồng</span>
                  </span>
                </div>
                <div>🧭 <b>Hướng gió:</b> {tillageData.properties.WINDDRCTN}</div>
                <div>☁️ <b>Điều kiện thời tiết:</b> Có mây rải rác</div>
                <div>🚜 <b>Tốc độ máy:</b> {seedingData.properties.VEHICLSPEED} km/h</div>

              </div>
            </div>

          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapWithPolygon;
