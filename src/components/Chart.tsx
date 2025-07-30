import ArrowUpIcon from "../assets/ArrowUpOutlined.svg"

const FarmChart = ({
  riskPredictions,
  outputPrediction,
  children,
}: {
  riskPredictions: {
    icon: any
    content: string
    level: string
  }[]
  outputPrediction: {
    icon: any
    title: string
    value: string
    percent: string
    description: string
  }
  children?: React.ReactNode
}) => {
  return (
    <div className="mt-6">
      <div className="text-text-primary font-bold text-xl mb-4">
        Phân tích thông minh
      </div>

      <div className="flex flex-col rounded-[20px] border border-card-border p-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-5 md:w-[40%]">
            {riskPredictions.map((item, index) => (
              <div
                key={item.content}
                className="flex items-center rounded-[60px] py-3 px-6 gap-4"
                style={{
                  background:
                    index === 0
                      ? "linear-gradient(74.49deg, #ABE3FF 40.88%, #CCEEFF 82.16%)"
                      : "linear-gradient(71.92deg, #7CEFC0 29.1%, #B9FFE2 87.87%)",
                }}
              >
                <div>
                  <img src={item.icon} alt="" className="w-[32px]" />
                </div>
                <div>
                  <div className="font-normal text-[16px] text-[#202020]">
                    {item.content}
                  </div>
                  <div className="font-bold text-[16px] text-[#202020]">
                    {item.level}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex flex-row rounded-[20px] border border-card-border px-[32px] py-[27px] flex-1 gap-4 items-center"
            style={{
              background:
                "linear-gradient(218.43deg, #FFFFFF 48.2%, #E9FFE5 104.58%)",
            }}
          >
            <div className="flex-1">
              <div className="font-bold text-[20px]">
                {outputPrediction.title}
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-bold text-[40px] text-text-primary">
                  {outputPrediction.value}
                </span>
                <span className="border rounded-[10px] flex items-center gap-1 bg-[#F6FFED] px-2 border-[0.75px] border-[#B7EB8F] mt-[5px]">
                  <img
                    src={ArrowUpIcon}
                    alt="ArrowUp"
                    className="w-[16px] inline"
                  />
                  <span className="text-[#52C41A]">
                    {outputPrediction.percent}
                  </span>
                </span>
              </div>
              <div className="font-normal text-[14px]">
                {outputPrediction.description}
              </div>
            </div>
            <div>
              <img src={outputPrediction.icon} alt="" className="w-[88px]" />
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}

export default FarmChart
