import ProductCard from '../components/ProductCard';
import HomeCover from '../assets/HomeCoverNew.webp';
import Navigation from '../components/Navigation';

import af from '../assets/plants/af.avif'
import gk from '../assets/plants/gk.avif';
import ja from '../assets/plants/ja.avif'
import ua from '../assets/plants/ua.avif';
import sc from '../assets/plants/sc.avif';
import lo from '../assets/plants/lo.avif';
import qs from '../assets/plants/qs.avif';
import lk from '../assets/plants/lk.avif'

// Danh sách sản phẩm mía, dừa, điều
const products = [
  {
    id: '1',
    code: '20100054',
    name: 'Đường Biên Hoà Organic túi 400g/túi',
    image: 'https://product.hstatic.net/200000721249/product/d3af47b48462223c7b73_2e0b5ccf651a464590c27017ff94d612_master.jpg',
    description: 'Sản phẩm được chế biến từ mía hữu cơ 100%, không sử dụng phân bón hóa học, thuốc trừ sâu hay hóa chất trong suốt quá trình canh tác, mang đến sự an toàn tuyệt đối cho sức khỏe.'
  },
  {
    id: '6',
    code: '20100042',
    name: 'Đường Mía Thiên Nhiên 1kg',
    image: 'https://product.hstatic.net/200000721249/product/sp_1x1-20_c264c2dcfc234c7b9e8ab18926bd8946_master.jpg',
    description: 'Đường mía thiên nhiên Biên Hòa 1kg được làm từ 100% mía tự nhiên, mang lại vị ngọt dịu nhẹ. Sản phẩm này không chỉ giúp món ăn thêm phần hấp dẫn với màu sắc và hương vị đặc trưng mà còn đảm bảo an toàn với phương pháp sản xuất hiện đại, không sử dụng chất tạo màu.'
  },
  {
    id: '10',
    code: '20100020',
    name: 'Đường đen Nữ Hoàng 1kg',
    image: 'https://product.hstatic.net/200000721249/product/duong_den-01_c1daf36f089b4bf6a8d3858b3717b523_master.png',
    description: 'Đường đen là loại đường chưa được tinh luyện kỹ, có màu nâu đậm và giữ được hương vị ngọt tự nhiên từ mía đường. Kích thước hạt to hơn đường trắng, dễ hòa tan trong nước và mang lại hương vị thanh đạm. Đường đen còn được gọi với nhiều tên khác như đường vàng, đường đỏ. Đây là nguyên liệu lý tưởng để chế biến các món ăn và đồ uống yêu thích như trà sữa, bánh ngọt, hoặc món tráng miệng khác.'
  },
  {
    id: '7',
    code: '20100075',
    name: 'Đường phèn Biên Hoà Pro 500g',
    image: 'https://product.hstatic.net/200000721249/product/dg_phen_pro_19d0f25959d54dff87fa728d06ddbdac_master.jpg',
    description: 'Sản phẩm chất lượng cao, ngọt thanh tự nhiên, không thể thiếu trong gian bếp của bạn.'
  },
  {
    id: '3',
    name: 'Nước dừa đóng hộp Cocoxim Organic 330ml/Hộp',
    image: 'https://product.hstatic.net/200000721249/product/nuoc_dua_dong_hop_cocoxim_organic_dung_tich_330ml_2_ab50bbd3328c4c3081ca7ef1bc112794_master.jpg',
    description: 'Được làm từ 100% nước dừa nguyên chất từ những quả dừa Organic trồng theo phương pháp hữu cơ (không sử dụng phân bón hóa học, thuốc trừ sâu, nguyên liệu biến đổi Gen,...), hoàn toàn không thêm đường'
  },
  {
    id: '4',
    name: 'Thùng 12 Hộp Nước dừa đóng hộp Cocoxim Organic 330ml/Hộp',
    image: 'https://product.hstatic.net/200000721249/product/thung_12_hop_nuoc_dua_dong_hop_cocoxim_organic_dung_tich_330ml_b22c19cf380c484586178df7809a0b8e_master.jpg',
    description: 'Được làm từ 100% nước dừa nguyên chất từ những quả dừa Organic trồng theo phương pháp hữu cơ (không sử dụng phân bón hóa học, thuốc trừ sâu, nguyên liệu biến đổi Gen,...), hoàn toàn không thêm đường'
  },
  {
    id: '5',
    name: 'Nước dừa đóng hộp Cocoxim Xanh 330ml/hộp',
    image: 'https://product.hstatic.net/200000721249/product/nuoc_dua_xiem_xanh_cocoxim_330ml_2_caf0b6a1f3774f0d9d3dee20865fa125_master.jpg',
    description: 'Được làm từ 100% nước dừa tươi nguyên chất, mang trọn vẹn hương vị Dừa Xiêm Xanh Bến Tre - một trong những loại dừa nổi tiếng nhất của vùng đất được mệnh danh là "thủ phủ" dừa của Việt Nam'
  },
  {
    id: '8',
    name: 'Nước Cốt Dừa XIM - Mom Cooks 200ml/hộp',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnqqGcaWKl0mZGwRTP6qnxcv-unh_PAD9GKLKbt7jaPxgsZQKr5Doi6pZqry-89Szh290Hngu-7Y9kh6RfGpVC1D695QCLHn8_ha1FPw89',
    description: 'Nước Cốt Dừa XIM – Mom Cooks với hơn 94% nước cốt dừa nguyên chất được chắt chiu từ những trái dừa ngon đệ nhất của thủ phủ dừa Bến Tre. Bằng công nghệ ép lạnh và tiệt trùng UHT tiên tiến từ Thụy Điển, sản xuất trong 24h đã đưa những tinh túy sánh mịn, tự nhiên ấy vào hộp tiện lợi vô cùng mà không cần sử dụng bất kì chất bảo quả và hương liệu tạo béo nào, giúp bạn dễ dàng trong việc chế biến món ăn và thức uống.'
  },
  {
    id: '9',
    name: 'Thùng 24 chai nước dừa XIM 350ml',
    image: 'https://product.hstatic.net/200000721249/product/715e74cade7b7825216a_8012aaba52a24936876c0092e024c1f9_master.jpg',
    description: 'Nước dừa XIM không chỉ là một thức uống giải khát mát lạnh, mà còn là nguồn cung cấp chất điện giải quan trọng như Natri (Na+) và Kali (K+), giúp bù khoáng và duy trì sự cân bằng nước trong cơ thể. Đây là sự lựa chọn lý tưởng để giải nhiệt, làm dịu cơn khát và mang đến cảm giác sảng khoái trong những ngày hè oi ả.'
  },

  {
    id: '10',
    name: 'Nước màu Bếp Xưa 210g',
    description: 'Nước Màu Bếp Xưa 210g được chiết xuất từ mật mía tự nhiên cô đặc, mang đến màu sắc chuẩn cánh gián đẹp mắt cho các món ăn. Đây là lựa chọn lý tưởng để thay thế nước đường thắng trong chế biến món ăn, giúp món ăn không chỉ ngon mà còn hấp dẫn về mặt thị giác.',
    image: 'https://product.hstatic.net/200000721249/product/z5869358870236_8e273bdcd9457929da625745540c6591_92afec2c76754e378c258bd596d43b50_master.jpg',
  },

  {
    id: '11',
    name: 'Nước Cốt Dừa Đóng Lon XIM - Mom Cooks 400ml/lon',
    description: 'Nước Cốt Dừa XIM – Mom Cooks với 94,75% nước cốt dừa nguyên chất được chắt chiu từ những trái dừa ngon đệ nhất của thủ phủ dừa Bến Tre. Bằng công nghệ ép lạnh và tiệt trùng hàng đầu, sản xuất trong 24h đã đưa những tinh túy sánh mịn, tự nhiên ấy vào lon tiện lợi vô cùng mà không cần sử dụng bất kì chất bảo quả và hương liệu tạo béo nào, giúp bạn dễ dàng trong việc chế biến món ăn và thức uống. Chỉ cần bật nắp lon nước cốt dừa XIM – Mom Cooks tươi hảo hàng là bạn đang bật công tắc cho vạn món ngon thơm béo, khó cưỡng.',
    image: 'https://product.hstatic.net/200000721249/product/lon_400ml__1__af2f8cf157254da4be146d7731632ce7_master.png',
  },

  {
    id: '12',
    name: 'ĐƯỜNG ĂN KIÊNG ISOMALT BIÊN HÒA ',
    description: 'Đường Ăn Kiêng Isomalt Biên Hòa được chế biến từ 100% củ cải đường tự nhiên, là sự lựa chọn hoàn hảo dành cho người cần kiểm soát lượng đường trong chế độ ăn uống. Với vị ngọt thanh, nhẹ nhàng và ít năng lượng (2kcal/g), sản phẩm này không chỉ đáp ứng nhu cầu làm ngọt mà còn hỗ trợ duy trì sức khỏe một cách an toàn.',
    image: 'https://product.hstatic.net/200000721249/product/z5869367142370_eac91d4dd4220c67e24355045ae17262_0de4e687919b4b24930505e1e89a46b2_master.jpg',
  },

];

const plants = [
  {
    id: '1',
    name: 'Mía giống KK3',
    image: ja,
    description: 'Giống mía KK3 chất lượng cao, năng suất lớn, chống chịu sâu bệnh tốt.'
  },
  {
    id: '2',
    name: 'Mía giống LK92-11',
    image: sc,
    description: 'Giống mía LK92-11 có hàm lượng đường cao, thích hợp cho sản xuất đường.'
  },
  {
    id: '3',
    name: 'Dừa giống Xiêm Xanh',
    image: gk,
    description: 'Dừa Xiêm Xanh cho trái sớm, nước ngọt, thích hợp cho vùng đất phèn.'
  },
  {
    id: '4',
    name: 'Dừa giống Dứa',
    image: lk,
    description: 'Dừa giống Dứa có cơm dày, thơm ngon, thích hợp cho chế biến các sản phẩm từ cơm dừa.'
  },
  {
    id: '5',
    name: 'Điều giống PN1',
    image: af,
    description: 'Điều giống PN1 cho năng suất cao, hạt to đều, tỷ lệ nhân cao.'
  },
  {
    id: '6',
    name: 'Điều giống AB29',
    image: ua,
    description: 'Điều giống AB29 chống chịu bệnh tốt, thích nghi với nhiều loại đất.'
  },
  {
    id: '7',
    name: 'Lúa giống ST25',
    image: qs,
    description: 'Lúa thích nghi rộng, năng suất cao và chất lượng gạo thượng hạng'
  },
  {
    id: '11',
    name: 'Chuối giống GL3‑5',
    image: lo,
    description: 'Chuối có khả năng kháng bệnh héo vàng rất tốt, năng suất cao'
  },
];

export default function Home() {
  return (
    <main>
      <div className="relative w-full items-center">
        <img
          src={HomeCover}
          alt="DigiFarm Cover"
          className="mask-auto w-full h-full object-cover min-h-30"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex flex-col justify-center items-center text-white md:px-6 md:pt-2 md:pb-19 pb-22">
          <h1 className="md:text-4xl text-xl font-bold md:mb-2 text-center">Hệ sinh thái sản phẩm Agris</h1>
          <p className="md:text-xl text-base text-center max-w-2xl">Các giống mía, dừa, điều chất lượng cao cho nông nghiệp bền vững</p>
        </div>
        <div className='absolute md:-bottom-18 top-[calc(100%-80px)] w-full'>
          <Navigation />
        </div>
      </div>
      <div className="layout-container">
        <div className="mb-6">
          <h2 className="md:text-2xl text-xl font-bold text-text-primary">Danh mục sản phẩm</h2>
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
          <h2 className="md:text-2xl text-xl font-bold text-text-primary">Danh sách cây trồng</h2>
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
  );
}