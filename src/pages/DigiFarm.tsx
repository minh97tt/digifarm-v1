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
    { label: 'Giống cây trồng', value: 'KK3' },
    {
      label: 'Nguồn gốc giống',
      value: 'Viện Nghiên cứu Mía đường, Trung tâm Nông nghiệp địa phương',
    },
    { label: 'Thời gian chọn giống', value: '11/1/2023' },
    {
      label: 'Tiêu chí chọn',
      value: 'Năng suất cao, chịu hạn tốt, kháng sâu bệnh',
    },
    { label: 'Hàm lượng đường ước tính', value: '12.5 Brix' },
    { label: 'Vòng đời', value: '10 - 12 tháng' },
  ]

  // Data for planting card
  const plantingData = [
    { label: 'Ngày trồng', value: '15/11/2023' },
    { label: 'Diện tích trồng', value: '5 ha' },
    { label: 'Mật độ trồng', value: '12.000 hom/ha' },
    { label: 'Giống sử dụng', value: 'KK3' },
    { label: 'Loại đất', value: 'Đất phù sa, pH 6.5' },
    { label: 'Nguồn nước tưới', value: 'Tưới tiêu thủ công từ kênh nội đồng' },
  ]

  // Data for farming activities card
  const farmingData = [
    { label: 'Bón phân lần 1', value: '12/10/2023' },
    { label: 'Loại', value: '(NPK 16-16-8, 500kg/ha)' },
    { label: 'Làm cỏ', value: '15/1/2024' },
    { label: 'Bón phân lần 2', value: '15/3/2024' },
    { label: 'Loại', value: '(Ure + Kali, 400kg/ha)' },
    { label: 'Tưới tiêu', value: 'Mỗi 10 ngày/lần' },
    { label: 'Kiểm tra sâu bệnh', value: 'Định kỳ 2 tuần/lần' },
    { label: 'Biện pháp xử lý sâu bệnh', value: 'Phun thuốc trừ sâu sinh học' },
    {
      label: 'Thời tiết dự báo',
      value: 'Nhiệt độ TB: 29°C, lượng mưa TB: 140 mm/tháng',
    },
    { label: 'Tốc độ sinh trưởng ước tính', value: '0.85 m/tháng' },
  ]

  // Data for harvest planning card
  const harvestData = [
    { label: 'Ngày thu hoạch', value: '20/9/2024' },
    { label: 'Năng suất thực tế', value: '87 tấn/ha' },
    { label: 'Độ đường (Pol)', value: '13.20%' },
    { label: 'Phương thức thu hoạch', value: 'Cơ giới hóa 70%, thu công 30%' },
    { label: 'Thời gian thu hoạch', value: '5 ngày' },
    { label: 'Số nhân công', value: '15 người' },
  ]

  // Data for delivery planning card
  const deliveryData = [
    { label: 'Đơn vị vận chuyển', value: 'Tự vận chuyển' },
    { label: 'Tài xế', value: 'Lê Văn Việt' },
    { label: 'Biển số xe', value: '70A1 - 123.45' },
    { label: 'Điểm đến', value: 'Nhà kho TTCS' },
    {
      label: 'Địa chỉ',
      value: 'Xã Tân Hưng, Huyện Tân Châu, Tỉnh Tây Ninh, Việt Nam',
    },
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

      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            link={{ label: 'Xem thông tin thành phẩm', href: '/retails' }}
          
          />

          {/* Harvest Planning Card */}
          {/* <InfoCard className="md:col-span-2" title="Vận chuyển" data={deliveryData} icon={<PngIcon imageUrl={deliveryIcon} />} /> */}
        </div>

        <Chart
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
                values={[68.38, 77.93, 90.88, 90.65, 91.61, 62.13, 92.22]}
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

        <MapWithPolygon />
      </div>
    </main>
  )
}
