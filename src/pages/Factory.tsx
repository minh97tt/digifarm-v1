
import CoverImage from '../assets/DigiFactoryCover.png'
import Hero from '../components/Hero'
import InfoCard from '../components/InfoCard'
import { DigiFactIcon } from '../components/icons/DigiFactIcon'
import { PngIcon } from '../components/PngIcon'

import FactoryIcon from '../assets/factory/factory.png'
import LineIcon from '../assets/factory/line.png'
import WarehouseIcon from '../assets/factory/warehouse.png'
import TransportIcon from '../assets/factory/transport.png'
import ProductIcon from '../assets/factory/product.png'
import ProductWarehouseIcon from '../assets/factory/product-warehouse.png'


export default function Factory() {
  const rawMaterialWarehouseData = [
    { label: 'Kho', value: 'Nhà kho TTCS' },
    { label: 'Địa chỉ', value: 'Xã Tân Hưng, Huyện Tân Châu, Tỉnh Tây Ninh, Việt Nam' },
    { label: 'Ngày nhập kho', value: '09/22/2024' },
    { label: 'Ngày xuất kho', value: '09/23/2024' },
  ]

  const factoryData = [
    { label: 'Nhà máy', value: 'Nhà máy TTCS' },
    { label: 'Địa chỉ', value: 'Xã Tân Hưng, Huyện Tân Châu, Tỉnh Tây Ninh, Việt Nam' },
  ]

  const productionLineData = [
    { label: 'Định mức nguyên vật liệu', value: '20000000_01' },
    { label: 'Công thức', value: 'UHT03_04' },
    { label: 'Phiên bản sản xuất', value: 'PV00002788' },
    { label: 'Lệnh sản xuất', value: '3013861' },
    { label: 'Dây chuyền sản xuất', value: 'CH33002 - Line 5' },
  ]

  const finishedProductData = [
    { label: 'Thành phẩm', value: 'Đường Mía Thiên Nhiên 1kg' },
    { label: 'Mã sản phẩm', value: '20100042' },
    { label: 'Lô hàng', value: '0000064873' },
    { label: 'Ngày sản xuất', value: '09/24/2024' },
    { label: 'Ngày hết hạn', value: '09/24/2025' },
  ]

  const finishedGoodsWarehouseData = [
    { label: 'Kho', value: 'Kho thành phẩm TTCS' },
    { label: 'Ngày nhập kho', value: '09/25/2024' },
    { label: 'Ngày xuất kho', value: '09/30/2024' },
  ]

  const transportationData = [
    { label: 'Đơn vị vận chuyển', value: 'Nhất Tín' },
    { label: 'Tài xế', value: 'Nguyễn Quốc Sinh' },
    { label: 'Biển số xe', value: '70H7-606.45' },
    { label: 'Điểm đến', value: 'Hùng Tín LTD Company' },
    { label: 'Địa chỉ', value: 'Phạm Đăng Giảng, Phường Bình Hưng Hoà, Quận Bình Tân, TPHCM, Việt Nam' },
  ]

  return (
    <main>
      <Hero
        coverImage={CoverImage}
        icon={DigiFactIcon}
      />
      <div className='layout-container'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard title="Kho nguyên liệu" data={rawMaterialWarehouseData}  icon={<PngIcon imageUrl={WarehouseIcon} />} />

          <InfoCard title="Nhà máy sản xuất" data={factoryData} icon={<PngIcon imageUrl={FactoryIcon} />} />

          <InfoCard title="Dây chuyền sản xuất" data={productionLineData} icon={<PngIcon imageUrl={LineIcon} />} />

          <InfoCard title="Thành phẩm" data={finishedProductData} icon={<PngIcon imageUrl={ProductIcon} />} />

          <InfoCard title="Kho thành phẩm" data={finishedGoodsWarehouseData} icon={<PngIcon imageUrl={ProductWarehouseIcon} />} />

          <InfoCard title="Vận chuyển" data={transportationData} icon={<PngIcon imageUrl={TransportIcon} />} />
        </div>
      </div>
    </main>
  )
}