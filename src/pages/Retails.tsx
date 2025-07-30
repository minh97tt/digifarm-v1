import CoverImage from '../assets/DigiRetailsCover.webp'
import { DigiRetailsIcon } from '../components/icons/DigiRetailsIcon'
import Hero from '../components/Hero'
import InfoCard from '../components/InfoCard'
import { PngIcon } from '../components/PngIcon'

import DistributorIcon from '../assets/retails/distributor.png'
import ProductIcon from '../assets/retails/product.png'
import StoreLocationIcon from '../assets/retails/store-location.png'
import { BreadCrumb } from '../components/BreadCrumb'
import Chart from '../components/Chart'

import ProductivityChart from '../components/ProductivityChart'
import StockIcon from '../assets/retails/stock.png'
import DeliveryIcon from '../assets/retails/delivery.png'
import MarketChartIcon from '../assets/retails/market-chart.png'
import InfoGroupCard from '../components/InfoGroupCard'
import ShopeeIcon from '../assets/retails/shopee.svg'
import TiktokIcon from '../assets/retails/tiktok.svg'

export default function Home() {
  const productData = [
    { label: 'Thành phẩm', value: 'Đường Mía Thiên Nhiên 1kg' },
    { label: 'Thương hiệu', value: 'Biên Hoà' },
    { label: 'Mã sản phẩm', value: '0000064873' },
    { label: 'Ngày sản xuất', value: '24/09/2024' },
    { label: 'Ngày hết hạn', value: '24/09/2025' },
  ]

  const distributorData = [
    { label: 'Nhà phân phối', value: 'Hùng Tín LTD Company' },
    {
      label: 'Địa chỉ',
      value:
        'Phạm Đăng Giảng, Phường Bình Hưng Hoà, Quận Bình Tân, TPHCM, Việt Nam',
    },
  ]

  const retailLocationData = [
    {
      title: 'Kênh tuỳ chỉnh',
      items: [
        { label: 'Cửa hàng', value: 'Tạp hoá Dì Ba' },
        {
          label: 'Địa chỉ',
          value: 'Cộng Hoà, Phường 13, Quận Tân Bình, TPHCM, Việt Nam',
        },
        { label: 'Đơn đặt hàng', value: '#OYMXOSZE' },
        { label: 'Ngày đặt hàng', value: '01/10/2024' },
      ],
    },
    {
      title: 'Kênh thương mại điện tử',
      items: [
        {
          label: 'Cửa hàng',
          value: (
            <span>
              <img className="inline" src={ShopeeIcon} alt="Shopee" /> Shopee
            </span>
          ),
        },
        { label: 'Tên sản phẩm', value: 'Đường mía thiên nhiên 1kg' },
        { label: 'Thương hiệu', value: 'Biên Hoà' },
        { label: 'Mã sản phẩm', value: '20100042' },
        { label: 'Giá', value: '185.000đ' },
      ],
    },
    {
      items: [
        {
          label: 'Cửa hàng',
          value: (
            <span>
              <img className="inline" src={TiktokIcon} alt="Tiktok" /> Tiktok
            </span>
          ),
        },
        { label: 'Tên sản phẩm', value: 'Đường mía thiên nhiên 1kg' },
        { label: 'Thương hiệu', value: 'Biên Hoà' },
        { label: 'Mã sản phẩm', value: '20100042' },
        { label: 'Giá', value: '185.000đ' },
      ],
    },
  ]

  return (
    <main>
      <BreadCrumb
        breadCrumbList={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Digiretail', active: true },
        ]}
      />
      <Hero icon={DigiRetailsIcon} coverImage={CoverImage} />

      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Sản phẩm"
            data={productData}
            icon={<PngIcon imageUrl={ProductIcon} />}
            link={{ label: 'Xem quy trình sản xuất', href: '/factory' }}
          />

          <InfoCard
            title="Nhà phân phối"
            data={distributorData}
            icon={<PngIcon imageUrl={DistributorIcon} />}
          />

          <InfoGroupCard
            className="md:col-span-2"
            title="Điểm bán"
            data={retailLocationData}
            icon={<PngIcon imageUrl={StoreLocationIcon} />}
          />
        </div>

        <Chart
          riskPredictions={[
            {
              icon: StockIcon,
              content: 'Rủi ro hết hàng',
              level: 'Trung bình',
            },
            {
              icon: DeliveryIcon,
              content: 'Rủi ro gian hàng trễ',
              level: 'Thấp',
            },
          ]}
          outputPrediction={{
            icon: MarketChartIcon,
            title: 'Dự đoán nhu cầu tiêu thụ',
            value: '320 sp/tuần',
            percent: '32%',
            description: 'Nếu giữ được điều kiện hiện tại',
          }}
        >
          <div className="mt-7">
            <div className="text-text-primary font-bold text-md">
              Biểu đồ tiêu thụ
            </div>
            <div className="w-full h-[400px]">
              <ProductivityChart
                unit="sp"
                unitLabel="sản phẩm"
                chartId="r-chart-1"
                xLabels={[
                  'CH 1',
                  'CH 2',
                  'CH 3',
                  'CH 4',
                  'CH 5',
                  'CH 6',
                  'CH 7',
                ]}
                values={[232, 350, 375, 408, 420, 396, 480]}
              />
            </div>
          </div>
        </Chart>
      </div>
    </main>
  )
}
