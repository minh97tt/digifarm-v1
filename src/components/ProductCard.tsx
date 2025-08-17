import { useNavigate } from 'react-router-dom';

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  code?: string;
  description?: string;
  clickable?: boolean;
};

export default function ProductCard({ name, code, image, description, clickable }: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-card-border group relative ${clickable ? 'cursor-pointer' : 'cursor-default'
        }`}
      onClick={() => {
        if (clickable && name.toLowerCase().includes('đường')) {
          navigate(`/farm/${code}`, { viewTransition: true });
        }
      }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay with View button */}
        <div className={`absolute inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>

        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary truncate">{name}</h3>
        {description && (
          <p className="text-text-label-secondary text-sm mt-1 line-clamp-2">{description}</p>
        )}

        <button
          className={`bg-white border mt-2 border-card-border text-text-primary px-4 py-2 rounded-xl font-medium text-sm hover:bg-green-50 transition-colors duration-300 transform hover:scale-105 ${clickable ? 'cursor-pointer' : 'hidden'}`}
        >
          Xem chuỗi cung ứng
        </button>
      </div>
    </div>
  );
}