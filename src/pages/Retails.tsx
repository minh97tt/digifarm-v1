import CoverImage from '../assets/DigiRetailsCover.png'
import { DigiRetailsIcon } from '../components/icons/DigiRetailsIcon'
import Hero from '../components/Hero'
import InfoCard from '../components/InfoCard'
import { PngIcon } from '../components/PngIcon'

import DistributorIcon from '../assets/retails/distributor.png'
import ProductIcon from '../assets/retails/product.png'
import StoreLocationIcon from '../assets/retails/store-location.png'


export default function Home() {
  const productData = [
    { label: 'Thành phẩm', value: 'Đường Mía Thiên Nhiên 1kg' },
    { label: 'Thương hiệu', value: 'Biên Hoà' },
    { label: 'Mã sản phẩm', value: '0000064873' },
    { label: 'Ngày sản xuất', value: '9/24/2024' },
    { label: 'Ngày hết hạn', value: '9/24/2025' },
  ]

  const distributorData = [
    { label: 'Nhà phân phối', value: 'Hùng Tín LTD Company' },
    { label: 'Địa chỉ', value: 'Phạm Đăng Giảng, Phường Bình Hưng Hoà, Quận Bình Tân, TPHCM, Việt Nam' },
  ]

  const retailLocationData = [
    { label: 'Cửa hàng', value: 'Tạp hoá Dì Ba' },
    { label: 'Địa chỉ', value: 'Cộng Hoà, Phường 13, Quận Tân Bình, TPHCM, Việt Nam' },
    { label: 'Đơn đặt hàng', value: '#OYMXOSZE' },
    { label: 'Ngày đặt hàng', value: '10/1/2024' },
  ]

  return (
    <main>
      <Hero
        icon={DigiRetailsIcon}
        coverImage={CoverImage}
      />

      <div className='layout-container'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard title="Sản phẩm" data={productData} icon={<PngIcon imageUrl={ProductIcon} />} />

        <InfoCard title="Nhà phân phối" data={distributorData} icon={<PngIcon imageUrl={DistributorIcon} />} />

        <InfoCard className="md:col-span-2" title="Điểm bán" data={retailLocationData} icon={<PngIcon imageUrl={StoreLocationIcon} />} />
        </div>
      </div>
    </main>
  )
}