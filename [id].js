import { useRouter } from 'next/router';

// Mahsulot ID larini olish uchun statik yo'llarni belgilash
export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // Boshqa mahsulotlar...
  ];
  return { paths, fallback: false };
}

// Mahsulot ma'lumotlarini olish
export async function getStaticProps({ params }) {
  const { id } = params;

  // Mahsulot ma'lumotlarini olish (masalan, API dan)
  const product = {
    id: id,
    name: 'Mahsulot ' + id,
    description: 'Bu mahsulot haqida batafsil ma\'lumot.',
    price: 10000,
    oldPrice: 12000,
    image: '/path/to/image' + id + '.jpg', // Rasm manzilini to'g'ri ko'rsatish
  };

  return {
    props: { product },
  };
}

// Mahsulot batafsil sahifasi
export default function ProductDetail({ product }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
      <p className="mt-4">{product.description}</p>
      <div className="flex items-baseline mt-2">
        <span className="font-medium text-lg text-primary">{product.price.toLocaleString()} so'm</span>
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through ml-2">
            {product.oldPrice.toLocaleString()} so'm
          </span>
        )}
      </div>
      <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-orange-600 transition-colors">
        Savatchaga qo'shish
      </button>
    </div>
  );
}