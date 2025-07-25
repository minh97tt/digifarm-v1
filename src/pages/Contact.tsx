export default function Contact() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Liên hệ</h1>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="mb-6 text-slate-600">
          Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn. Vui lòng liên hệ với chúng tôi qua các phương thức sau:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold text-amber-500 mb-4 border-b border-green-200 pb-2">Thông tin liên hệ</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-green-600">Địa chỉ:</p>
                <p className="text-slate-600">123 Đường Nông Nghiệp, Quận 1, TP. Hồ Chí Minh</p>
              </div>
              
              <div>
                <p className="font-medium text-green-600">Email:</p>
                <p className="text-slate-600">info@digifarm.vn</p>
              </div>
              
              <div>
                <p className="font-medium text-green-600">Điện thoại:</p>
                <p className="text-slate-600">(+84) 28 1234 5678</p>
              </div>
              
              <div>
                <p className="font-medium text-green-600">Giờ làm việc:</p>
                <p className="text-slate-600">Thứ Hai - Thứ Sáu: 8:00 - 17:00</p>
                <p className="text-slate-600">Thứ Bảy: 8:00 - 12:00</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-amber-500 mb-4 border-b border-green-200 pb-2">Gửi tin nhắn cho chúng tôi</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium text-green-600 mb-1">Họ và tên</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium text-green-600 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập địa chỉ email của bạn"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium text-green-600 mb-1">Tin nhắn</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập nội dung tin nhắn"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}