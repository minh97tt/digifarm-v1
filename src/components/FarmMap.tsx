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
  height: '580px',
  borderRadius: 20,
};

const dataMap = [
  {
    id: 1,
    name: 'DMF Ninh Dien',
    code: 'A01',
    variety: 'VN08-259',
    area: '100000',
    square: '39.22',
    date: '24/12/2024',
    worm: 4.95,
    tree: 6.4,
    evaluate: 'Sinh trưởng Khá',
    ns: 88,
    nutrion: '160 kg N, 40 kg P, 100 kg K, 20 kg S, 400kg Ca',
    water: '5 ngày trước mưa 45mm, đất cao, kiểm tra khai nước nếu phát hiện ngập úng'
  },
  {
    id: 2,
    name: 'DMF Ninh Dien',
    code: 'A02',
    variety: 'VN08-259',
    area: '100000',
    square: '35.36',
    date: '6/1/2025',
    worm: 4.33,
    tree: 7.0,
    evaluate: 'Sinh trưởng Tốt',
    ns: 95,
    nutrion: '160 kg N, 50 kg P, 100 kg K, 20 kg S, 800kg Ca',
    water: '5 ngày trước mưa 45mm, đất cao, kiểm tra khai nước nếu phát hiện ngập úng'
  },
  {
    id: 3,
    name: 'DMF Ninh Dien',
    variety: 'LK92-17',
    code: 'A03',
    area: '100000',
    square: '20.65',
    date: '15/1/2025',
    worm: 5.25,
    tree: 6.2,
    ns: 83,
    evaluate: 'Sinh trưởng Khá',
    nutrion: '154 kg N, 44 kg P, 88 kg K, 16.5 kg S, 800kg Ca',
    water: '5 ngày trước mưa 45mm, đất thấp nên khai úng'
  },
  {
    id: 4,
    name: 'DMF Ninh Dien',
    variety: 'KK3',
    code: 'A04',
    area: '100000',
    square: '18.64',
    date: '17/1/2025',
    worm: 5.76,
    tree: 7.7,
    ns: 101,
    evaluate: 'Sinh trưởng Tốt',
    nutrion: '140 kg N, 40 kg P, 80 kg K, 15 kg S, 800kg Ca',
    water: '5 ngày trước mưa 45mm, đất thấp nên khai úng'
  },
  {
    id: 5,
    name: 'DMF Ninh Dien',
    variety: 'KK3',
    area: '100000',
    code: 'A05',
    square: '55.75',
    date: '16/2/2025',
    worm: 5.76,
    tree: 7.3,
    ns: 91,
    evaluate: 'Sinh trưởng Tốt',
    nutrion: '160 kg N, 0 kg P, 100 kg K, 20 kg S',
    water: '5 ngày trước mưa 45mm, đất cao, kiểm tra khai nước nếu phát hiện ngập úng'
  },
  {
    id: 6,
    code: 'A06',
    name: 'DMF Ninh Dien',
    variety: 'LK92-17',
    area: '100000',
    square: '30.4',
    date: '24/1/2025',
    worm: 6.72,
    tree: 6.9,
    ns: 85,
    evaluate: 'Sinh trưởng Khá',
    nutrion: '176 kg N, 22 kg P, 110 kg K, 16.5 kg S, 800kg Ca',
    water: '5 ngày trước mưa 45mm, đất thấp nên khai úng'
  },
  {
    id: 7,
    code: 'A07',
    name: 'DMF Ninh Dien',
    variety: 'KK3',
    area: '100000',
    square: '19.2',
    date: '20/4/2025',
    worm: 4.16,
    tree: 6.9,
    ns: 100,
    evaluate: 'Sinh trưởng Tốt',
    nutrion: '134 kg N, 44 kg P, 68 kg K, 72 kg S',
    water: 'Thời tiết khô hạn hơn 10 ngày, kiểm tra, nên tưới 10-15 mm/lần'
  },
  {
    id: 8,
    code: 'A08',
    name: 'DMF Ninh Dien',
    variety: 'SRA17',
    area: '100000',
    square: '0.66',
    date: '8/6/2025',
    worm: 0.7,
    tree: 26.2,
    ns: 60,
    evaluate: 'Sinh trưởng Trung bình',
    nutrion: '133 kg N, 23 kg P, 99 kg K, 15 kg S',
    water: 'Thời tiết khô hạn hơn 10 ngày, kiểm tra, nên tưới 10-15 mm/lần'
  },
]

// {activeFeature.worm > 5 && <div className="flex items-center gap-1">
//   <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#FFD6D3] bg-[#FFF1F0] rounded-[12px] text-[14px] text-[#F5222D] px-2 leading-[15px]">
//     {' '}
//     <div className='flex items-center justify-center w-[14px] h-[14px]'>
//       <Lottie animationData={RedAlertLottie} loop={true} className='w-[40px] flex-shrink-0' />
//     </div>
//     <span className="py-[2px]">Có dấu hiệu sâu đục thân hại mía</span>
//   </span>
// </div>}

function InfoContent({ activeFeature, seedingData, tillageData }: any) {
  return (
    <div className="max-w-full text-sm bg-gray-100 p-2 rounded-lg space-y-1">
      {/* <div>Mã ruộng: {activeFeature.properties.FIELD_NAME}</div> */}
      <div className='flex flex-col gap-1'>
        <h1 className='font-bold mb-1'>Thông tin canh tác:</h1>
        <div>⦾ <b>Tên nông trường:</b> DMF Ninh Dien</div>
        <div>⦾ <b>Tên lô:</b> {activeFeature.code}</div>
        <div>🌱 <b>Giống cây trồng:</b> Mía {activeFeature.variety}</div>
        <div>📐 <b>Diện tích:</b> {activeFeature.square} ha</div>
        <div>📅 <b>Ngày trồng:</b> {activeFeature.date}</div>
        <div>🌡️ <b>Nhiệt độ trung bình:</b> 27.99 °C</div>
        <div>🌧️ <b>Lượng mưa lũy kế:</b> 1196.38 mm</div>
        {/* <div>🏔️ <b>Độ cao:</b> {seedingData.properties.Elevation} m</div> */}
        <div>💧 <b>Độ ẩm:</b> 65%</div>
      </div>

      <div className='flex flex-col gap-1 mt-2'>
        <h1 className='font-bold mb-1'>Cảnh báo, khuyến nghị:</h1>
        <div className='flex items-center'>
          <div>🐛 <b>Tình hình sâu bệnh:</b> Sâu đục thân {activeFeature.worm}%

            {/** */}
            {/* <Lottie animationData={RedAlertLottie} loop={true} className='w-[40px] flex-shrink-0' /> */}
          </div>
          <div className="flex items-center gap-1">
            <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#FFD6D3] bg-[#FFF1F0] rounded-[12px] text-[14px] text-[#F5222D] px-2 leading-[15px]">
              <div className='flex items-center justify-center w-[14px] h-[14px]'>
                <Lottie animationData={RedAlertLottie} loop={true} className='w-[40px] flex-shrink-0' />
              </div>
              <span className="py-[2px]">Khuyến cáo {activeFeature.worm > 5 ? 'phun thuốc' : 'thả Ong mắt đỏ'}</span>
            </span>
          </div>
        </div>

        <div>⦾ <b>Mật độ cây:</b> {activeFeature.tree} cây/m2</div>
        <div>⦾ <b>Đánh giá sinh trưởng: </b> {activeFeature.evaluate}</div>
        <div>⦾ <b>Ước tính năng suất: </b> {activeFeature.ns} T/ha</div>
        <div>⦾ <b>Dinh dưỡng: </b> {activeFeature.nutrion}</div>
        {/* <div className="flex items-center gap-1">
          <span>🌡️ <b>Nhiệt độ:</b></span>
          <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#ffff34] bg-[#ffffeb] text-[14px] rounded-[12px] text-[#373700] px-2 leading-[15px]">
            <img
              className="h-[13px] inline"
              src={WanringIcon}
              alt="Wanring"
            />
            <span className="py-[2px]">Nhiệt độ quá thấp, ảnh hưởng vùng trồng</span>
          </span>
        </div> */}



        <div className="flex items-center gap-1">
          <span>💧 <b>Tưới tiêu:</b></span>
          <span className="ml-1 inline-flex items-center gap-1 border-[1px] border-[#00ae00] bg-[#f0ffec] rounded-[12px] text-[14px] text-[#006300] px-2 leading-[15px]">
            {' '}
            💚
            <span className="py-[2px]">{activeFeature.water}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

// Calculate center based on the first feature in boundaries
const firstFeature = boundaries.features[6];
const firstCoordinate = firstFeature?.geometry.coordinates[0][0];



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
                setActiveFeature({ ...feature, ...dataMap[index] });
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
              maxWidth: 1000,
              // maxHeight: 1000,
              headerDisabled: true,
              // You cannot set full CSS here, but some layout things can be tweaked
            }}
            position={hoverPosition}
            onCloseClick={() => setHovered(false)}
          >
            <InfoContent activeFeature={activeFeature} seedingData={seedingData} tillageData={tillageData} />
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapWithPolygon;
