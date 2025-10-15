import { useState } from 'react'
import Select from 'react-select'

import digiFarmCover from '../assets/farm_cover.webp'
import InfoCard from '../components/InfoCard'
import MapWithPolygon from '../components/FarmMap'
import { PngIcon } from '../components/PngIcon'
import { useParams } from 'react-router-dom'

import fertilizerIcon from '../assets/farm/fertilizer.png'
import sugarIcon from '../assets/farm/sugar.png'
import treeIcon from '../assets/farm/trees.png'
import truckIcon from '../assets/farm/truck.png'
import Chart from '../components/Chart'
import { BreadCrumb } from '../components/BreadCrumb'

import WormImg from '../assets/farm/worm.png'
import BeeImg from '../assets/farm/bee.png'
import RainingImg from '../assets/farm/raining.png'
import SugarCaneImg from '../assets/farm/sugar-cane.png'
import PlantGrowthChart from '../components/PlantGrowthChart'
import ProductivityChart from '../components/ProductivityChart'

import farmVideo from '../assets/videos/farm_3.mp4'

const LoteData = {
  A01: {
    productivity: [80.1, 88.6, 87.4, 88.0],
    plantGrowth: {
      heightValues: [1.85, 2.2, 2.45, 2.6],
      densityValues: [5.7, 6.8, 6.1, 6.4],
    },
  },
  A02: {
    productivity: [99.0, 93.0, 97.4, 95.2],
    plantGrowth: {
      heightValues: [1.9, 2.25, 2.5, 2.65],
      densityValues: [7.8, 6.7, 7.3, 7.0],
    },
  },
  A03: {
    productivity: [74.4, 70.7, 96.2, 83.4],
    plantGrowth: {
      heightValues: [1.88, 2.23, 2.48, 2.63],
      densityValues: [4.9, 5.3, 7.1, 6.2],
    },
  },
  A04: {
    productivity: [119.3, 105.4, 96.7, 101.0],
    plantGrowth: {
      heightValues: [1.83, 2.18, 2.43, 2.58],
      densityValues: [9.0, 7.9, 7.5, 7.7],
    },
  },
  A05: {
    productivity: [99.7, 89.4, 92.6, 91.0],
    plantGrowth: {
      heightValues: [1.82, 2.16, 2.4, 2.55],
      densityValues: [7.8, 7.2, 7.5, 7.3],
    },
  },
  A06: {
    productivity: [47.4, 84.7, 85.3, 85.0],
    plantGrowth: {
      heightValues: [1.89, 2.24, 2.49, 2.64],
      densityValues: [3.4, 7.3, 6.6, 6.9],
    },
  },
  A07: {
    productivity: [102.5, 102.5, 97.2, 99.9],
    plantGrowth: {
      heightValues: [1.91, 2.26, 2.51, 2.66],
      densityValues: [9.1, 9.1, 8.7, 8.9],
    },
  },
}

export default function DigiFarm() {
  // Lấy tham số id từ URL
  const { id } = useParams()

  const [selectedLote, setSelectedLote] = useState('A01')
  const loteData = LoteData[selectedLote as keyof typeof LoteData]

  // Data for crop variety card
  const cropData = [
    { label: 'Tên giống', value: 'VN08-259' },
    { label: 'Loại giống', value: 'Thương mại' },
    { label: 'Nguồn gốc giống', value: 'NT Thành Long' },
    { label: 'Trạm lấy giống', value: 'Trạm 5' },
    { label: 'Tuổi giống', value: '8 tháng' },
    { label: 'Tiêu chí chọn giống', value: 'Chín sớm, đất cao' },
  ]

  // Data for planting card
  const plantingData = [
    { label: 'Ngày trồng', value: '24/12/2024' },
    { label: 'Diện tích trồng', value: '39.22 ha' },
    {
      label: 'Xử lý hom giống',
      value: 'Propiconazole 0.16 l/ha + Bifenthrin 0.2 l/ha',
    },
    { label: 'Phân lót', value: 'NPK 16-16-8, 432 kg/ha' },
    { label: 'Tên người trồng', value: 'Lê Đức Phương' },
    { label: 'Máy trồng', value: 'MK02 - 6120B' },
    { label: 'Mật độ trồng', value: '11.3 t/ha' },
  ]

  // Data for farming activities card
  const farmingData = [
    { label: 'Bón phân', value: 'NPK 17-7-17, 470 kg/ha' },
    { label: 'Ngày bón phân', value: '12/05/2025' },
    { label: 'Phun thuốc cỏ', value: 'Atrazine, 1.38 l/ha' },
    { label: 'Thời gian phun', value: '19/01/2025' },
    { label: 'Ngày tưới tiêu', value: '23/04/2025' },
    { label: 'Lượng nước (mm)', value: '20 mm' },
  ]

  // Data for harvest planning card
  const harvestData = [
    { label: 'Ngày thu hoạch bắt đầu', value: '12/11/2024' },
    { label: 'Ngày thu hoạch kết thúc', value: '12/11/2024' },
    { label: 'Diện tích thu hoạch', value: '4.61 ha' },
    { label: 'Năng suất sạch', value: '44.79 tấn/ha' },
    { label: 'Tạp chất', value: '7.04 %' },
    { label: 'CCS', value: '8.62 %' },
    { label: 'Hình thức thu hoạch', value: 'Máy thu hoạch số TH0106' },
  ]

  const selectBoxClasses = `
    [&_.css-13cymwt-control]:!rounded-[10px]
    [&_.css-t3ipsp-control]:!rounded-[10px]
    [&_.css-t3ipsp-control]:!border-[green]
    [&_.css-tr4s17-option]:!bg-[#30bf71]
  `

  return (
    <main>
      <BreadCrumb
        breadCrumbList={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Digifarm', active: true },
        ]}
      />
      {/* <Hero coverImage={digiFarmCover} /> */}
      <video
        src={farmVideo}
        autoPlay
        loop
        muted
        className="w-full h-[500px] object-cover"
      />

      <div className="layout-container no-nav md:!-mt-40 !-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MapWithPolygon />

          <Chart
            className="md:col-span-2"
            riskPredictions={[
              {
                icon: RainingImg,
                content: 'Khả năng mưa to gây ngập úng',
                level: 'Thấp',
              },
              {
                icon: BeeImg,
                content: 'Rủi ro sâu đục thân',
                extra: <img src={WormImg} alt="" className="w-[18px] inline-block" />,
                level: 'Trung bình',
                iconClass: 'w-[72px]',
                py: 'py-0',
                px: 'px-2',
                gap: 'gap-0',
              },
            ]}
            outputPrediction={{
              icon: SugarCaneImg,
              title: 'Dự đoán năng suất cây trồng',
              value: `${loteData?.productivity?.[3] || 86.44} tấn/ha`,
              percent: '68%',
              description: 'Nếu giữ được điều kiện hiện tại',
            }}
            extra={
              <Select
                defaultValue={{ value: 'A01', label: 'Lô A01' }}
                options={[
                  { value: 'A01', label: 'Lô A01' },
                  { value: 'A02', label: 'Lô A02' },
                  { value: 'A03', label: 'Lô A03' },
                  { value: 'A04', label: 'Lô A04' },
                  { value: 'A05', label: 'Lô A05' },
                  { value: 'A06', label: 'Lô A06' },
                  { value: 'A07', label: 'Lô A07' },
                ]}
                onChange={(e) => setSelectedLote(e?.value || '')}
                className={selectBoxClasses}
              />
            }
          >
            <div className="mt-7">
              <div className="text-text-primary font-bold text-md">
                Biểu đồ năng suất (Lô {selectedLote})
              </div>
              <div className="w-full h-[400px]">
                <ProductivityChart
                  unit="tấn/ha"
                  unitLabel="tấn/ha"
                  chartId="chart-1"
                  xLabels={['Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8']}
                  values={
                    loteData?.productivity || LoteData['A01'].productivity
                  }
                  barMaxWidth="80px"
                />
              </div>
            </div>

            <div className="mt-7">
              <div className="text-text-primary font-bold text-md">
                Biểu đồ tăng trưởng cây trồng (Lô {selectedLote})
              </div>
              <div className="w-full h-[400px]">
                <PlantGrowthChart
                  xLabels={['Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8']}
                  heightValues={
                    loteData?.plantGrowth?.heightValues ||
                    LoteData['A01'].plantGrowth.heightValues
                  }
                  densityValues={
                    loteData?.plantGrowth?.densityValues ||
                    LoteData['A01'].plantGrowth.densityValues
                  }
                />
              </div>
            </div>
          </Chart>

          {/* Crop Variety Information Card */}
          <InfoCard
            title="Giống cây trồng"
            data={cropData}
            icon={<PngIcon imageUrl={sugarIcon} />}
          />

          {/* Planting Information Card */}
          <InfoCard
            title="Trồng trọt"
            data={plantingData}
            icon={<PngIcon imageUrl={treeIcon} />}
          />

          {/* Farming Activities Card */}
          <InfoCard
            title="Canh tác"
            data={farmingData}
            icon={<PngIcon imageUrl={fertilizerIcon} />}
          />

          {/* Harvest Planning Card */}
          <InfoCard
            title="Thu hoạch vụ trước"
            data={harvestData}
            icon={<PngIcon imageUrl={truckIcon} />}
            link={{
              label: 'Xem quy trình sản xuất',
              href: `/factory/${id || ''}`,
            }}
          />

          {/* Harvest Planning Card */}
          {/* <InfoCard className="md:col-span-2" title="Vận chuyển" data={deliveryData} icon={<PngIcon imageUrl={deliveryIcon} />} /> */}
        </div>
      </div>
    </main>
  )
}
