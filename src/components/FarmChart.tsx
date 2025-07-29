import WormImg from "../assets/farm/worm.png"
import RainingImg from "../assets/farm/raining.png"
import SugarCaneImg from "../assets/farm/sugar-cane.png"
import ArrowUpIcon from "../assets/ArrowUpOutlined.svg"
import ProductivityChart from "./ProductivityChart"
import PlantGrowthChart from "./PlantGrowthChart"

const FarmChart = () => {
  return (
    <div className="mt-6">
      <div className="text-text-primary font-bold text-xl mb-4">
        Phân tích thông minh
      </div>

      <div className="flex flex-col rounded-[20px] border border-card-border p-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-5 md:w-[40%]">
            <div
              className="flex items-center rounded-[60px] py-3 px-6 gap-4"
              style={{
                background:
                  "linear-gradient(74.49deg, #ABE3FF 40.88%, #CCEEFF 82.16%)",
              }}
            >
              <div>
                <img src={RainingImg} alt="Raining" className="w-[32px]" />
              </div>
              <div>
                <div className="font-normal text-[16px] text-[#202020]">
                  Khả năng mưa to gây ngập úng
                </div>
                <div className="font-bold text-[16px] text-[#202020]">Cao</div>
              </div>
            </div>

            <div
              className="flex items-center rounded-[60px] py-3 px-6 gap-4"
              style={{
                background:
                  "linear-gradient(71.92deg, #7CEFC0 29.1%, #B9FFE2 87.87%)",
              }}
            >
              <div>
                <img src={WormImg} alt="Worm" className="w-[32px]" />
              </div>
              <div>
                <div className="font-normal text-[16px] text-[#202020]">
                  Rủi ro sâu đục thân
                </div>
                <div className="font-bold text-[16px] text-[#202020]">Thấp</div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-row rounded-[20px] border border-card-border px-[32px] py-[27px] flex-1 gap-4 items-center"
            style={{
              background:
                "linear-gradient(218.43deg, #FFFFFF 48.2%, #E9FFE5 104.58%)",
            }}
          >
            <div className="flex-1">
              <div className="font-bold text-[20px]">Dự đoán năng suất</div>
              <div className="flex gap-2 items-center">
                <span className="font-bold text-[40px] text-text-primary">
                  96 tấn/ha
                </span>
                <span className="border rounded-[10px] flex items-center gap-1 bg-[#F6FFED] px-2 border-[0.75px] border-[#B7EB8F] mt-[5px]">
                  <img
                    src={ArrowUpIcon}
                    alt="ArrowUp"
                    className="w-[16px] inline"
                  />
                  <span className="text-[#52C41A]">68%</span>
                </span>
              </div>
              <div className="font-normal text-[14px]">
                Nếu giữ được điều kiện hiện tại
              </div>
            </div>
            <div>
              <img src={SugarCaneImg} alt="SugarCane" className="w-[88px]" />
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="text-text-primary font-bold text-md">
            Biểu đồ năng suất
          </div>
          <div className="w-full h-[400px]">
            <ProductivityChart />
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
      </div>
    </div>
  )
}

export default FarmChart
