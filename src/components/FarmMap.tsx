import { useState } from 'react';
import {
  GoogleMap,
  Polygon,
  InfoWindow,
} from '@react-google-maps/api';
import Lottie from "lottie-react";

import boundaries from '../assets/boundaries';
import WanringIcon from '../assets/farm/warning.png'
import RedAlertLottie from '../assets/red-alert.json'

const containerStyle = {
  width: '100%',
  height: '640px',
  borderRadius: 20,
};

// Calculate center based on the first feature in boundaries
const firstFeature = boundaries.features[6];
const firstCoordinate = firstFeature?.geometry.coordinates[0][0];

const sqts = ['7,4', '7,1', '3,8', '3,5', '14,2', '6,8', '9,2', '8,3', '10,7' ]

const center = {
  lat: 11.224,
  lng: 106.01643482963899
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
        center={center}
        zoom={14}
        
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
                setActiveFeature({...feature, sqt: sqts[index]});
                setHoverPosition({
                  lat: e.latLng?.lat() ?? 0,
                  lng: e.latLng?.lng() ?? 0,
                });
                // console.log('a@', index);
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
              disableAutoPan: true,
              maxWidth: 500,
              headerDisabled: true,
              // You cannot set full CSS here, but some layout things can be tweaked
            }}
            position={hoverPosition}
            onCloseClick={() => setHovered(false)}
          >
            <div className="max-w-130 !text-lg bg-gray-100 p-2 rounded-lg space-y-1 text-[14px]">
              {/* <div>Mã ruộng: {activeFeature.properties.FIELD_NAME}</div> */}
              <div className='flex flex-col gap-1'>
                <h1 className='font-bold mb-2'>Thông tin canh tác:</h1>

                <div>🌱 <b>Giống cây trồng:</b> Mía K{seedingData.properties.Variety}</div>
                <div>📐 <b>Diện tích:</b> {activeFeature.sqt} ha</div>
                <div>📅 <b>Ngày trồng:</b> {seedingData.properties.Time}</div>
                <div>🌡️ <b>Nhiệt độ:</b> {tillageData.properties.AIRTEMP} độ C</div>
                <div>🏔️ <b>Độ cao:</b> {seedingData.properties.Elevation} m</div>
                <div>🌧️ <b>Lượng mưa:</b> {tillageData.properties.RAIN}</div>
                <div>💧 <b>Độ ẩm:</b> {tillageData.properties.HUMIDITY}%</div>
              </div>

              <div className='flex flex-col gap-1 mt-3'>
                <h1 className='font-bold mb-2'>Các cảnh báo, khuyến nghị:</h1>

                <div className="flex items-center gap-1">
                  <span>🌡️ <b>Nhiệt độ:</b></span>
                  <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#ffff34] bg-[#ffffeb] text-[14px] rounded-[12px] text-[#373700] px-2 leading-[15px]">
                    <img
                      className="h-[13px] inline"
                      src={WanringIcon}
                      alt="Wanring"
                    />
                    <span className="py-[2px]">Nhiệt độ quá thấp, ảnh hưởng vùng trồng</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🦠 <b>Tình hình dịch bệnh:</b></span>
                  <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#FFD6D3] bg-[#FFF1F0] rounded-[12px] text-[14px] text-[#F5222D] px-2 leading-[15px]">
                    {' '}
                    <div className='flex items-center justify-center w-[14px] h-[14px]'>
                      <Lottie animationData={RedAlertLottie} loop={true} className='w-[40px] flex-shrink-0' />
                    </div>
                    <span className="py-[2px]">Có dấu hiệu sâu đục thân hại mía</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💧 <b>Tưới tiêu:</b></span>
                  <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#00ae00] bg-[#f0ffec] rounded-[12px] text-[14px] text-[#006300] px-2 leading-[15px]">
                    {' '}
                    💚
                    <span className="py-[2px]">Nên tưới 6 lần mỗi lần 65 đến 75 m3/ha</span>
                  </span>
                </div>
              </div>
            </div>

          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapWithPolygon;
