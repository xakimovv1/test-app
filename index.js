// pages/index.js
import ProductCard from '../suv-delivery/src/app/components/ProductCard';

// Mahsulotlar ma'lumotlari
const products = [
  {
    id: 1,
    name: 'Mahsulot 1',
    description: 'Bu mahsulot 1 haqida batafsil ma\'lumot.',
    price: '10 000 so\'m',
    image: 'https://via.placeholder.com/150', // O'zingizning rasm URL manzilingizni qo'shing
  },
  {
    id: 2,
    name: 'Mahsulot 2',
    description: 'Bu mahsulot 2 haqida batafsil ma\'lumot.',
    price: '20 000 so\'m',
    image: 'https://via.placeholder.com/150', // O'zingizning rasm URL manzilingizni qo'shing
  },
  // Qo'shimcha mahsulotlar qo'shishingiz mumkin
];

// HomePage komponenti
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-white">
      <img src="/path/to/logo.png" alt="L-Bravo Water" className="mb-6 w-32" /> {/* Logo yo'lini to'g'rilang */}
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Xush kelipsiz!</h1>
      <form className="w-full max-w-sm bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Telefon raqam
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+9989000000000"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Parol
          </label>
          <input
            type="password"
            id="password"
            placeholder="**********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-gray-500 text-xs italic">parol o'zgartirish</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          KIRISH
        </button>
      </form>
      <p className="mt-4 text-blue-500">sign in</p>
    </div>
  );
}