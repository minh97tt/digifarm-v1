import ProductCard from '../components/ProductCard'
import HomeCover from '../assets/homeCover.webp'
import Navigation from '../components/Navigation'

import te from '../assets/plants/te.avif'
import cc1 from '../assets/plants/coconut.jpg'
import cc2 from '../assets/plants/coconut-o.png'
import bnn from '../assets/plants/banana.png'
import ric from '../assets/plants/rice.jpg'
import yuc from '../assets/plants/yuca.png'
import ca1 from '../assets/plants/cane.jpg'
import ca2 from '../assets/plants/cane-o.png'

// Danh sách sản phẩm mía, dừa, điều
const products = [
  {
    id: '1',
    code: '20100054',
    name: 'Đường Biên Hoà Organic túi 400g/túi',
    image:
      'https://product.hstatic.net/200000721249/product/d3af47b48462223c7b73_2e0b5ccf651a464590c27017ff94d612_master.jpg',
    description:
      'Sản phẩm được chế biến từ mía hữu cơ 100%, không sử dụng phân bón hóa học, thuốc trừ sâu hay hóa chất trong suốt quá trình canh tác, mang đến sự an toàn tuyệt đối cho sức khỏe.',
  },
  {
    id: '6',
    code: '20100042',
    name: 'Đường Mía Thiên Nhiên 1kg',
    image:
      'https://product.hstatic.net/200000721249/product/sp_1x1-20_c264c2dcfc234c7b9e8ab18926bd8946_master.jpg',
    description:
      'Đường mía thiên nhiên Biên Hòa 1kg được làm từ 100% mía tự nhiên, mang lại vị ngọt dịu nhẹ. Sản phẩm này không chỉ giúp món ăn thêm phần hấp dẫn với màu sắc và hương vị đặc trưng mà còn đảm bảo an toàn với phương pháp sản xuất hiện đại, không sử dụng chất tạo màu.',
  },
  {
    id: '5',
    name: 'Nước dừa đóng hộp Cocoxim Xanh 330ml/hộp',
    image:
      'https://product.hstatic.net/200000721249/product/nuoc_dua_xiem_xanh_cocoxim_330ml_2_caf0b6a1f3774f0d9d3dee20865fa125_master.jpg',
    description:
      'Được làm từ 100% nước dừa tươi nguyên chất, mang trọn vẹn hương vị Dừa Xiêm Xanh Bến Tre - một trong những loại dừa nổi tiếng nhất của vùng đất được mệnh danh là "thủ phủ" dừa của Việt Nam',
  },
  {
    id: '11',
    name: 'Nước Cốt Dừa Đóng Lon XIM - Mom Cooks 400ml/lon',
    description:
      'Nước Cốt Dừa XIM – Mom Cooks với 94,75% nước cốt dừa nguyên chất được chắt chiu từ những trái dừa ngon đệ nhất của thủ phủ dừa Bến Tre. Bằng công nghệ ép lạnh và tiệt trùng hàng đầu, sản xuất trong 24h đã đưa những tinh túy sánh mịn, tự nhiên ấy vào lon tiện lợi vô cùng mà không cần sử dụng bất kì chất bảo quả và hương liệu tạo béo nào, giúp bạn dễ dàng trong việc chế biến món ăn và thức uống. Chỉ cần bật nắp lon nước cốt dừa XIM – Mom Cooks tươi hảo hàng là bạn đang bật công tắc cho vạn món ngon thơm béo, khó cưỡng.',
    image:
      'https://product.hstatic.net/200000721249/product/lon_400ml__1__af2f8cf157254da4be146d7731632ce7_master.png',
  },
  {
    id: '10',
    code: '20100020',
    name: 'Đường đen Nữ Hoàng 1kg',
    image:
      'https://product.hstatic.net/200000721249/product/duong_den-01_c1daf36f089b4bf6a8d3858b3717b523_master.png',
    description:
      'Đường đen là loại đường chưa được tinh luyện kỹ, có màu nâu đậm và giữ được hương vị ngọt tự nhiên từ mía đường. Kích thước hạt to hơn đường trắng, dễ hòa tan trong nước và mang lại hương vị thanh đạm. Đường đen còn được gọi với nhiều tên khác như đường vàng, đường đỏ. Đây là nguyên liệu lý tưởng để chế biến các món ăn và đồ uống yêu thích như trà sữa, bánh ngọt, hoặc món tráng miệng khác.',
  },
  {
    id: '7',
    code: '20100075',
    name: 'Đường phèn Biên Hoà Pro 500g',
    image:
      'https://product.hstatic.net/200000721249/product/dg_phen_pro_19d0f25959d54dff87fa728d06ddbdac_master.jpg',
    description:
      'Sản phẩm chất lượng cao, ngọt thanh tự nhiên, không thể thiếu trong gian bếp của bạn.',
  },
  {
    id: '3',
    name: 'Nước dừa đóng hộp Cocoxim Organic 330ml/Hộp',
    image:
      'https://product.hstatic.net/200000721249/product/nuoc_dua_dong_hop_cocoxim_organic_dung_tich_330ml_2_ab50bbd3328c4c3081ca7ef1bc112794_master.jpg',
    description:
      'Được làm từ 100% nước dừa nguyên chất từ những quả dừa Organic trồng theo phương pháp hữu cơ (không sử dụng phân bón hóa học, thuốc trừ sâu, nguyên liệu biến đổi Gen,...), hoàn toàn không thêm đường',
  },
  {
    id: '4',
    name: 'Thùng 12 Hộp Nước dừa đóng hộp Cocoxim Organic 330ml/Hộp',
    image:
      'https://product.hstatic.net/200000721249/product/thung_12_hop_nuoc_dua_dong_hop_cocoxim_organic_dung_tich_330ml_b22c19cf380c484586178df7809a0b8e_master.jpg',
    description:
      'Được làm từ 100% nước dừa nguyên chất từ những quả dừa Organic trồng theo phương pháp hữu cơ (không sử dụng phân bón hóa học, thuốc trừ sâu, nguyên liệu biến đổi Gen,...), hoàn toàn không thêm đường',
  },
  
  {
    id: '8',
    name: 'Nước Cốt Dừa XIM - Mom Cooks 200ml/hộp',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnqqGcaWKl0mZGwRTP6qnxcv-unh_PAD9GKLKbt7jaPxgsZQKr5Doi6pZqry-89Szh290Hngu-7Y9kh6RfGpVC1D695QCLHn8_ha1FPw89',
    description:
      'Nước Cốt Dừa XIM – Mom Cooks với hơn 94% nước cốt dừa nguyên chất được chắt chiu từ những trái dừa ngon đệ nhất của thủ phủ dừa Bến Tre. Bằng công nghệ ép lạnh và tiệt trùng UHT tiên tiến từ Thụy Điển, sản xuất trong 24h đã đưa những tinh túy sánh mịn, tự nhiên ấy vào hộp tiện lợi vô cùng mà không cần sử dụng bất kì chất bảo quả và hương liệu tạo béo nào, giúp bạn dễ dàng trong việc chế biến món ăn và thức uống.',
  },
  {
    id: '9',
    name: 'Thùng 24 chai nước dừa XIM 350ml',
    image:
      'https://product.hstatic.net/200000721249/product/715e74cade7b7825216a_8012aaba52a24936876c0092e024c1f9_master.jpg',
    description:
      'Nước dừa XIM không chỉ là một thức uống giải khát mát lạnh, mà còn là nguồn cung cấp chất điện giải quan trọng như Natri (Na+) và Kali (K+), giúp bù khoáng và duy trì sự cân bằng nước trong cơ thể. Đây là sự lựa chọn lý tưởng để giải nhiệt, làm dịu cơn khát và mang đến cảm giác sảng khoái trong những ngày hè oi ả.',
  },

  {
    id: '10',
    name: 'Nước màu Bếp Xưa 210g',
    description:
      'Nước Màu Bếp Xưa 210g được chiết xuất từ mật mía tự nhiên cô đặc, mang đến màu sắc chuẩn cánh gián đẹp mắt cho các món ăn. Đây là lựa chọn lý tưởng để thay thế nước đường thắng trong chế biến món ăn, giúp món ăn không chỉ ngon mà còn hấp dẫn về mặt thị giác.',
    image:
      'https://product.hstatic.net/200000721249/product/z5869358870236_8e273bdcd9457929da625745540c6591_92afec2c76754e378c258bd596d43b50_master.jpg',
  },

  

  {
    id: '12',
    name: 'ĐƯỜNG ĂN KIÊNG ISOMALT BIÊN HÒA ',
    description:
      'Đường Ăn Kiêng Isomalt Biên Hòa được chế biến từ 100% củ cải đường tự nhiên, là sự lựa chọn hoàn hảo dành cho người cần kiểm soát lượng đường trong chế độ ăn uống. Với vị ngọt thanh, nhẹ nhàng và ít năng lượng (2kcal/g), sản phẩm này không chỉ đáp ứng nhu cầu làm ngọt mà còn hỗ trợ duy trì sức khỏe một cách an toàn.',
    image:
      'https://product.hstatic.net/200000721249/product/z5869367142370_eac91d4dd4220c67e24355045ae17262_0de4e687919b4b24930505e1e89a46b2_master.jpg',
  },
]

const plants = [
  {
    id: 'sugarcane1',
    name: 'Mía canh tác thông thường',
    image: ca1,
    description: '	Giống mía đại trà, phổ biến rộng khắp, dễ tiêu thụ',
  },
  {
    id: 'sugarcane2',
    name: 'Mía hữu cơ',
    image: ca2,
    description:
      '	Giống mía tăng trưởng tốt nhờ xu hướng tiêu dùng sạch, bền vững',
  },
  {
    id: 'coconut1',
    name: 'Dừa canh tác thông thường',
    image: cc1,
    description: 'Giống dừa trồng đại trà, xuất khẩu phổ thông',
  },
  {
    id: 'coconut2',
    name: 'Dừa hữu cơ',
    image: cc2,
    description: 'Giống dừa sử dụng cho sản phẩm cao cấp',
  },
  {
    id: 'banana',
    name: 'Chuối',
    image: bnn,
    description: 'Giống chuối kháng bệnh tốt, sử dụng linh hoạt trong chế biến',
  },
  {
    id: 'rice',
    name: 'Lúa',
    image: ric,
    description:
      '	Giống lúa phù hợp với điều kiện khí hậu - thổ nhưỡng - mùa vụ  của Việt Nam',
  },
  {
    id: 'yuca',
    name: 'Sắn',
    image: yuc,
    description: 'Giống sắn chủ lực, ổn định, phù hợp với vùng miền',
  },
  {
    id: 'tea',
    name: 'Trà',
    image: te,
    description: 'Giống trà nhiều búp, năng suất cao, chất lượng tốt',
  },
]

export default function Home() {
  return (
    <main className="relative">
      <div
        className="relative z-1 w-full items-center h-100 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${HomeCover})` }}
      >
        <div className="inset-0 h-full bg-black/20 bg-opacity-40 flex flex-col justify-center items-center text-white md:px-6 md:pt-2 md:pb-19 pb-22">
          <h1 className="md:text-[38px] text-2xl font-bold md:mb-2 text-center">
            Hệ sinh thái sản phẩm AgriS
          </h1>
          <p className="md:text-[22px] text-lg max-md:mb-9 text-center max-w-2xl">
            Nông nghiệp công nghệ cao và bền vững trên nền tảng Dữ liệu
          </p>
        </div>
      </div>

      <div className="relative -mt-16 max-md:-mt-48 z-9">
        <Navigation />
      </div>

      <div className="p-6 max-md:p-2 max-md:mt-4">
        <div className="mb-6">
          <h2 className="md:text-2xl text-xl font-bold text-text-primary">
            Danh mục sản phẩm
          </h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, id) => (
            <ProductCard
              clickable={id < 4}
              id={product.id}
              code={product.code}
              name={product.name}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>

        <div className="my-6">
          <h2 className="md:text-2xl text-xl font-bold text-text-primary">
            Danh sách cây trồng
          </h2>
        </div>
        {/* Plants grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((product, id) => (
            <ProductCard
              // clickable={id < 4}
              id={product.id}
              code={'hihe'}
              name={product.name}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
