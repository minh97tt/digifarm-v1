import CoverImage from '../assets/DigiFactoryCover.webp'
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
import { BreadCrumb } from '../components/BreadCrumb'

import Chart from '../components/Chart'
import ProductivityChart from '../components/ProductivityChart'
import MaterialIcon from '../assets/factory/material.png'
import MachineIcon from '../assets/factory/machine.png'
import FinishedProductIcon from '../assets/factory/finished-product.png'
import { useParams } from 'react-router-dom'
import { PRODUCT_ITEMS } from '../components/consts'

const rawMaterialWarehouseData = [
  { label: 'Kho', value: 'Nhà kho TTCS' },
  {
    label: 'Địa chỉ',
    value: 'Xã Tân Hưng, Huyện Tân Châu, Tỉnh Tây Ninh, Việt Nam',
  },
  { label: 'Ngày nhập kho', value: '22/09/2024' },
  { label: 'Ngày xuất kho', value: '23/09/2024' },
]

const factoryData = [
  { label: 'Nhà máy', value: 'Nhà máy TTCS' },
  {
    label: 'Địa chỉ',
    value: 'Xã Tân Hưng, Huyện Tân Châu, Tỉnh Tây Ninh, Việt Nam',
  },
]

const productionLineData = [
  { label: 'Định mức nguyên vật liệu', value: '20000000_01' },
  { label: 'Công thức', value: 'UHT03_04' },
  { label: 'Phiên bản sản xuất', value: 'PV00002788' },
  { label: 'Lệnh sản xuất', value: '3013861' },
  { label: 'Dây chuyền sản xuất', value: 'CH33002 - Line 5' },
]

const finishedGoodsWarehouseData = [
  { label: 'Kho', value: 'Kho thành phẩm TTCS' },
  { label: 'Ngày nhập kho', value: '25/09/2024' },
  { label: 'Ngày xuất kho', value: '30/09/2024' },
]

const transportationData = [
  { label: 'Đơn vị vận chuyển', value: 'Nhất Tín' },
  { label: 'Tài xế', value: 'Nguyễn Quốc Sinh' },
  { label: 'Biển số xe', value: '70H7-606.45' },
  { label: 'Điểm đến', value: 'Hùng Tín LTD Company' },
  {
    label: 'Địa chỉ',
    value:
      'Phạm Đăng Giảng, Phường Bình Hưng Hoà, Quận Bình Tân, TPHCM, Việt Nam',
  },
]

export default function Factory() {

  const { id } = useParams();

  const dbProduct = PRODUCT_ITEMS.find((item) => item.code === id);

  const finishedProductData = [
    { label: 'Thành phẩm', value: dbProduct?.name || 'Đường Mía Thiên Nhiên 1kg' },
    { label: 'Mã sản phẩm', value: dbProduct?.code || '20100042' },
    { label: 'Lô hàng', value: '0000064873' },
    { label: 'Ngày sản xuất', value: '24/09/2024' },
    { label: 'Ngày hết hạn', value: '24/09/2025' },
  ]

  return (
    <main>
      <BreadCrumb
        breadCrumbList={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Digifact', active: true },
        ]}
      />
      <Hero coverImage={CoverImage} icon={DigiFactIcon} />
      <div className="layout-container no-nav">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Kho nguyên liệu"
            data={rawMaterialWarehouseData}
            icon={<PngIcon imageUrl={WarehouseIcon} />}
            link={{ label: 'Xem quy trình trồng trọt', href: `/farm/${id}` }}
          />

          <InfoCard
            title="Nhà máy sản xuất"
            data={factoryData}
            icon={<PngIcon imageUrl={FactoryIcon} />}
          />

          <InfoCard
            title="Dây chuyền sản xuất"
            data={productionLineData}
            icon={<PngIcon imageUrl={LineIcon} />}
          />

          <InfoCard
            title="Thành phẩm"
            data={finishedProductData}
            icon={<PngIcon imageUrl={ProductIcon} />}
          />

          <InfoCard
            title="Kho thành phẩm"
            data={finishedGoodsWarehouseData}
            icon={<PngIcon imageUrl={ProductWarehouseIcon} />}
          />

          <InfoCard
            title="Vận chuyển"
            data={transportationData}
            icon={<PngIcon imageUrl={TransportIcon} />}
          />
        </div>

        <Chart
          riskPredictions={[
            {
              icon: MaterialIcon,
              content: 'Nguy cơ thiếu nguyên liệu',
              level: 'Thấp',
            },
            {
              icon: MachineIcon,
              content: 'Nguy cơ máy móc hư hỏng',
              level: 'Trung bình',
            },
          ]}
          outputPrediction={{
            icon: FinishedProductIcon,
            title: 'Dự đoán sản lượng thành phẩm',
            value: '120 tấn/ngày',
            percent: '40%',
            description: 'Nếu giữ được điều kiện hiện tại',
          }}
        >
          <div className="mt-7">
            <div className="text-text-primary font-bold text-md">
              Biểu đồ sản lượng
            </div>
            <div className="w-full h-[400px]">
              <ProductivityChart
                unit="tấn"
                unitLabel="tấn"
                chartId="f-chart-1"
                xLabels={[
                  'DC 1',
                  'DC 2',
                  'DC 3',
                  'DC 4',
                  'DC 5',
                  'DC 6',
                  'DC 7',
                ]}
                values={[68.38, 77.93, 90.88, 90.65, 91.61, 82.13, 92.22]}
              />
            </div>
          </div>
        </Chart>
      </div>
    </main>
  )
}
