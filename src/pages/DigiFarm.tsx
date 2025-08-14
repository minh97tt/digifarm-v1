import { DigiFarmIcon } from '../components/icons/DigiFarmIcon'
import digiFarmCover from '../assets/DigiFarmCover.webp'
import Hero from '../components/Hero'
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
import RainingImg from '../assets/farm/raining.png'
import SugarCaneImg from '../assets/farm/sugar-cane.png'
import PlantGrowthChart from '../components/PlantGrowthChart'
import ProductivityChart from '../components/ProductivityChart'

export default function DigiFarm() {
  // Lấy tham số id từ URL
  const { id } = useParams()
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
    { label: 'Diện tích trồng', value: '39.22 Ha' },
    { label: 'Xử lý hom giống', value: 'Propiconazole 0.16L/ha + Bifenthrin 0.2L/ha' },
    { label: 'Phân lót', value: 'NPK 16-16-8, 432kg/ha' },
    { label: 'Tên người trồng', value: 'Lê Đức Phương' },
    { label: 'Máy trồng', value: 'MK02 - 6120B' },
    { label: 'Mật độ trồng', value: '11.3 T/Ha' },
  ]

  // Data for farming activities card
  const farmingData = [
    { label: 'Bón phân', value: 'NPK 17-7-17, 470kg/ha' },
    { label: 'Ngày bón phân', value: '05/12/2025' },
    { label: 'Phun thuốc cỏ', value: 'Atrazine, 1.38l/ha' },
    { label: 'Thời gian phun', value: '01/19/2025' },
    { label: 'Ngày tưới tiêu', value: '04/23/2025' },
    { label: 'Lượng nước (mm)', value: '20 mm' },
  ]

  // Data for harvest planning card
  const harvestData = [
    { label: 'Ngày thu hoạch bắt đầu', value: '12/11/2024' },
    { label: 'Ngày thu hoạch kết thúc', value: '12/11/2024' },
    { label: 'Diện tích thu hoạch', value: '4.61 Ha' },
    { label: 'Năng suất sạch', value: '44.79 tấn/ha' },
    { label: 'Tạp chất', value: '7.04 %' },
    { label: 'CCS', value: '8.62 %' },
    { label: 'Hình thức thu hoạch', value: 'Máy thu hoạch số TH0106' },
  ]

  return (
    <main>
      <BreadCrumb
        breadCrumbList={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Digifarm', active: true },
        ]}
      />
      <Hero icon={DigiFarmIcon} coverImage={digiFarmCover} />

      <div className="layout-container no-nav">
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
                icon: WormImg,
                content: 'Rủi ro sâu đục thân',
                level: 'Trung bình',
              },
            ]}
            outputPrediction={{
              icon: SugarCaneImg,
              title: 'Dự đoán năng suất',
              value: '86.44 tấn/ha',
              percent: '68%',
              description: 'Nếu giữ được điều kiện hiện tại',
            }}
          >
            <div className="mt-7">
              <div className="text-text-primary font-bold text-md">
                Biểu đồ năng suất
              </div>
              <div className="w-full h-[400px]">
                <ProductivityChart
                  unit="tấn/ha"
                  unitLabel="tấn/ha"
                  chartId="chart-1"
                  xLabels={[
                    'Lô A01',
                    'Lô A02',
                    'Lô A03',
                    'Lô A04',
                    'Lô A05',
                    'Lô A06',
                    'Lô A07',
                  ]}
                  values={[88.0, 95.2, 83.4, 101.0, 91.0, 85.0, 99.9]}
                />
              </div>
            </div>

            <div className="mt-7">
              <div className="text-text-primary font-bold text-md">
                Biểu đồ tăng trưởng cây trồng
              </div>
              <div className="w-full h-[400px]">
                <PlantGrowthChart />
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
            title="Thu hoạch"
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
