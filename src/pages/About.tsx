export default function About() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Về DigiFarm</h1>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="mb-4 text-slate-600">
          DigiFarm là một nền tảng quản lý nông nghiệp kỹ thuật số giúp nông dân theo dõi, quản lý và tối ưu hóa hoạt động canh tác của họ.
        </p>
        
        <p className="mb-4 text-slate-600">
          Chúng tôi cung cấp các công cụ để theo dõi quá trình trồng trọt, từ việc chọn giống, trồng trọt, chăm sóc đến thu hoạch, giúp nông dân có thể đưa ra quyết định dựa trên dữ liệu chính xác.
        </p>
        
        <p className="mb-4 text-slate-600">
          Với DigiFarm, nông dân có thể:
        </p>
        
        <ul className="list-disc pl-6 mb-4 text-slate-600">
          <li className="mb-2">Theo dõi thông tin chi tiết về giống cây trồng</li>
          <li className="mb-2">Ghi lại các hoạt động canh tác hàng ngày</li>
          <li className="mb-2">Nhận thông báo và lời khuyên về thời điểm tưới tiêu, bón phân</li>
          <li className="mb-2">Dự đoán năng suất và lập kế hoạch thu hoạch</li>
          <li className="mb-2">Phân tích dữ liệu để cải thiện hiệu quả canh tác</li>
        </ul>
        
        <p className="text-slate-600">
          Chúng tôi cam kết hỗ trợ nông dân Việt Nam áp dụng công nghệ vào nông nghiệp, nâng cao năng suất và phát triển bền vững.
        </p>
      </div>
    </div>
  )
}