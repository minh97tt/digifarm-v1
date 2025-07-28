import { DigiFarmIcon } from '../components/icons/DigiFarmIcon'
import digiFarmCover from '../assets/DigiFarmCover.png'
import Hero from '../components/Hero'
import InfoCard from '../components/InfoCard'
import MapWithPolygon from '../components/FarmMap'
import { PngIcon } from '../components/PngIcon'
import { useParams } from 'react-router-dom'

import fertilizerIcon from '../assets/farm/fertilizer.png'
import sugarIcon from '../assets/farm/sugar.png'
import deliveryIcon from '../assets/farm/delivery.png'
import treeIcon from '../assets/farm/trees.png'
import truckIcon from '../assets/farm/truck.png'


export default function DigiFarm() {
  // Lấy tham số id từ URL
  const { id } = useParams()
  // Data for crop variety card
  const cropData = [
    { label: 'Giống cây trồng', value: 'KK3' },
    { label: 'Nguồn gốc giống', value: 'Viện Nghiên cứu Mía đường, Trung tâm Nông nghiệp địa phương' },
    { label: 'Thời gian chọn giống', value: '01/11/2023' },
    { label: 'Tiêu chí chọn', value: 'Năng suất cao, chịu hạn tốt, kháng sâu bệnh' },
    { label: 'Hàm lượng đường ước tính', value: '12.5 Brix' },
    { label: 'Vòng đời', value: '10 - 12 tháng' },
  ]

  // Data for planting card
  const plantingData = [
    { label: 'Ngày trồng', value: '11/15/2023' },
    { label: 'Diện tích trồng', value: '5 ha' },
    { label: 'Mật độ trồng', value: '12.000 hom/ha' },
    { label: 'Giống sử dụng', value: 'KK3' },
    { label: 'Loại đất', value: 'Đất phù sa, pH 6.5' },
    { label: 'Nguồn nước tưới', value: 'Tưới tiêu thủ công từ kênh nội đồng' },
  ]

  // Data for farming activities card
  const farmingData = [
    { label: 'Bón phân lần 1', value: '10/12/2023' },
    { label: 'Loại', value: '(NPK 16-16-8, 500kg/ha)' },
    { label: 'Làm cỏ', value: '01/15/2024' },
    { label: 'Bón phân lần 2', value: '03/15/2024' },
    { label: 'Loại', value: '(Ure + Kali, 400kg/ha)' },
    { label: 'Tưới tiêu', value: 'Mỗi 10 ngày/lần' },
    { label: 'Kiểm tra sâu bệnh', value: 'Định kỳ 2 tuần/lần' },
    { label: 'Biện pháp xử lý sâu bệnh', value: 'Phun thuốc trừ sâu sinh học' },
    { label: 'Thời tiết dự báo', value: 'Nhiệt độ TB: 29°C, lượng mưa TB: 140 mm/tháng' },
    { label: 'Tốc độ sinh trưởng ước tính', value: '0.85 m/tháng' },
  ]

  // Data for harvest planning card
  const harvestData = [
    { label: 'Ngày thu hoạch', value: '09/20/2024' },
    { label: 'Năng suất thực tế', value: '95 tấn/ha' },
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
    { label: 'Địa chỉ', value: 'Xã Tân Hưng, Huyện Tân Châu, Tỉnh Tây Ninh, Việt Nam' },
  ]

  return (
    <main>
      <Hero
        icon={DigiFarmIcon}
        coverImage={digiFarmCover}
      />
     
      <div className='layout-container'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crop Variety Information Card */}
          <InfoCard title="Giống cây trồng" data={cropData} icon={<PngIcon imageUrl={sugarIcon} />} />

          {/* Planting Information Card */}
          <InfoCard title="Trồng trọt" data={plantingData} icon={<PngIcon imageUrl={treeIcon} />} />

          {/* Farming Activities Card */}
          <InfoCard title="Canh tác" data={farmingData} icon={<PngIcon imageUrl={fertilizerIcon} />} />

          {/* Harvest Planning Card */}
          <InfoCard title="Thu hoạch" data={harvestData} icon={<PngIcon imageUrl={truckIcon} />} />

          {/* Harvest Planning Card */}
          <InfoCard className="md:col-span-2" title="Vận chuyển" data={deliveryData} icon={<PngIcon imageUrl={deliveryIcon} />} />
        </div>
        <MapWithPolygon />
      </div>
    </main>
  )
}