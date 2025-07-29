import ProductCard from '../components/ProductCard';
import HomeCover from '../assets/HomeCoverNew.png';
import Navigation from '../components/Navigation';

// Danh sách sản phẩm mía, dừa, điều
const products = [
  {
    id: '1',
    name: 'Mía giống KK3',
    image: 'https://images.unsplash.com/photo-1679543321530-4378c81af100?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Giống mía KK3 chất lượng cao, năng suất lớn, chống chịu sâu bệnh tốt.'
  },
  {
    id: '2',
    name: 'Mía giống LK92-11',
    image: 'https://images.unsplash.com/photo-1585155113372-6c1808141bf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Giống mía LK92-11 có hàm lượng đường cao, thích hợp cho sản xuất đường.'
  },
  {
    id: '3',
    name: 'Dừa giống Xiêm Xanh',
    image: 'https://images.unsplash.com/photo-1603779046675-2eccbab9b982?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Dừa Xiêm Xanh cho trái sớm, nước ngọt, thích hợp cho vùng đất phèn.'
  },
  {
    id: '4',
    name: 'Dừa giống Dứa',
    image: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Dừa giống Dứa có cơm dày, thơm ngon, thích hợp cho chế biến các sản phẩm từ cơm dừa.'
  },
  {
    id: '5',
    name: 'Điều giống PN1',
    image: 'https://images.unsplash.com/photo-1744818138313-5ac435a4cd35?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Điều giống PN1 cho năng suất cao, hạt to đều, tỷ lệ nhân cao.'
  },
  {
    id: '6',
    name: 'Điều giống AB29',
    image: 'https://plus.unsplash.com/premium_photo-1725384940666-8c04394eda4d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Điều giống AB29 chống chịu bệnh tốt, thích nghi với nhiều loại đất.'
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
        <div className='absolute md:-bottom-18 -bottom-40 w-full'>
          <Navigation />
        </div>
      </div>
      <div className="layout-container md:!mt-18 !mt-40">
        <div className="mb-6">
          <h2 className="md:text-2xl text-xl font-bold text-text-primary">Danh mục giống cây trồng</h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
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