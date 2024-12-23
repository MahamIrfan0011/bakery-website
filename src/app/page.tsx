import Image from 'next/image';

const cakes = [
  {
    id: 1,
    name: 'Chocolate Cake',
    src: '/choc cake.jpg',
    description: 'Chocolate Cake with Rich Ganache',
    price: 'Rs950',
  },
  {
    id: 2,
    name: 'Vanilla Sponge cake',
    src: '/vanilla spnge cake.jpg',
    description: 'Classic Vanilla Cake with Buttercream Frosting',
    price: 'Rs800',
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    src: '/red vel cake.jpg',
    description: 'Red Velvet Cake with Cream Cheese Frosting',
    price: 'Rs750',
  },
  {
    id: 4,
    name: 'Lemon Drizzle Cake',
    src: '/lemon drizzle cake.jpg',
    description: 'Lemon Drizzle Cake with Zesty Glaze',
    price: 'Rs900',
  },
  {
    id: 5,
    name: 'Strawberry Cake',
    src: '/straw cake.jpg',
    description: 'Strawberry Shortcake with Fresh Strawberries',
    price: 'Rs950',
  },
];

const cupcakes = [
  {
    id: 1,
    name: 'Chocolate Cupcake',
    src: '/chocolate Cupcakes.jpg',
    description: 'Rich and moist chocolate flavor',
    price: 'Rs300',
  },
  {
    id: 2,
    name: 'Vanilla Cupcake',
    src: '/vanilla cup.jpg',
    description: 'Classic vanilla flavor with a light, fluffy texture',
    price: 'Rs250',
  },
  {
    id: 3,
    name: 'Red Velvet Cupcake',
    src: '/red vel cupcake.jpg',
    description: 'A velvety, mild chocolate flavor with a hint of tang',
    price: 'Rs250',
  },
  {
    id: 4,
    name: 'Strawberry Cupcake',
    src: '/straw cupcake.jpg',
    description: ' A fruity and sweet cupcake made with fresh strawberries',
    price: 'Rs300',
  },
  {
    id: 5,
    name: 'Coconut Cupcake',
    src: '/coconut cupcake.jpg',
    description: 'A tropical flavor with shredded coconut in the batter and coconut cream frosting',
    price: 'Rs350',
  },
];

const pastries = [
  {
    id: 1,
    name: 'Pistachio Pastry',
    src: '/Pistachio.jpg',
    description: 'A creamy pistachio filling for pastries or eclairs',
    price: 'Rs350',
  },
  {
    id: 2,
    name: 'Peanut Pastry',
    src: '/peanut past.jpg',
    description: 'Dark chocolate and toasted hazelnuts in a pastry',
    price: 'Rs450',
  },
  {
    id: 3,
    name: 'Mango Pastry',
    src: '/mango.jpg',
    description: 'Tropical mango filling for a fresh flavor',
    price: 'Rs300',
  },
  {
    id: 4,
    name: 'Almond Cream pastry',
    src: '/Almond Cream.jpg',
    description: 'A sweet almond filling often used in Danish pastries',
    price: 'Rs350',
  },
  {
    id: 5,
    name: 'Cream Cheese Pastry',
    src: '/cream cheese.jpg',
    description: 'A rich cream cheese filling, often used in danishes',
    price: 'Rs400',
  },
];

const cookies = [
  {
    id: 1,
    name: 'Chocolate Chip Cooky',
    src: '/Chocolate Chip Cookies.jpg',
    description: 'The quintessential cookie with semi-sweet chocolate chips',
    price: 'Rs250',
  },
  {
    id: 2,
    name: 'Sugar Cooky',
    src: '/Sugar Cookies.jpg',
    description: 'Sweet, soft cookies that can be decorated with frosting or sprinkles',
    price: 'Rs250',
  },
  {
    id: 3,
    name: 'Oatmeal Raisin Cooky',
    src: '/oatmeal Raisin Cookies.jpg',
    description: 'Chewy oatmeal cookies with sweet raisins and a hint of cinnamon',
    price: 'Rs300',
  },
  {
    id: 4,
    name: 'Cherry Almond',
    src: '/Cherry Almond.jpg',
    description: 'Sweet cherry flavor combined with almond essence',
    price: 'Rs200',
  },
  {
    id: 5,
    name: 'Double Chocolate Cooky',
    src: '/double choc.jpg',
    description: 'Chocolate cookies made with cocoa powder and chocolate chips',
    price: 'Rs300',
  },
];

const bread = [
  {
    id: 1,
    name: 'Challah',
    src: '/Challah.jpg',
    description: 'A sweet, braided bread',
    price: 'Rs300',
  },
  {
    id: 2,
    name: 'Baguette',
    src: '/Baguette.jpg',
    description: 'A long, thin French loaf known for its crispy crust and soft, chewy interior',
    price: 'Rs350',
  },
  {
    id: 3,
    name: 'Focaccia',
    src: '/Focaccia.jpg',
    description: 'An Italian flatbread, often seasoned with olive oil, salt, and herbs',
    price: 'Rs350',
  },
  {
    id: 4,
    name: 'Sourdough',
    src: '/Sourdough.jpg',
    description: 'A tangy bread made through natural fermentation',
    price: 'Rs300',
  },
  {
    id: 5,
    name: 'Whole Wheat Bread',
    src: '/whole wheat bread.jpg',
    description: 'Made from whole grain flour',
    price: 'Rs350',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-brown flex flex-col">
      {/* First Navbar */}

      {/* Image Section */}
      <div className="relative flex justify-center mt-4">
        <Image
          src="/bG cake.jpg"
          alt="Cake Image"
          width={1300}
          height={600}
          objectFit="contain"
          className="opacity-90"
        />
      </div>

      {/* Second Navbar: Positioned below the image */}
      <div className="sticky top-0 z-20 bg-[#F5E0B2] shadow-md mt-4">
  <ul className="flex flex-col sm:flex-row lg:flex-row justify-around py-4">
    <li>
      <a href="#cupcakes" className="text-pink-600 hover:text-pink-800 transition-colors">Cupcakes</a>
    </li>
    <li>
      <a href="#cookies" className="text-pink-600 hover:text-pink-800 transition-colors">Cookies</a>
    </li>
    <li>
      <a href="#cakes" className="text-pink-600 hover:text-pink-800 transition-colors">Cakes</a>
    </li>
    <li>
      <a href="#bread" className="text-pink-600 hover:text-pink-800 transition-colors">Bread</a>
    </li>
    <li>
      <a href="#pastries" className="text-pink-600 hover:text-pink-800 transition-colors">Pastries</a>
    </li>
  </ul>
</div>



      {/* Content Sections */}
      {[
        { id: 'cupcakes', title: 'Cupcakes', items: cupcakes },
        { id: 'cookies', title: 'Cookies', items: cookies, bgColor: 'bg-gray-100' },
        { id: 'cakes', title: 'Cakes', items: cakes },
        { id: 'bread', title: 'Bread', items: bread, bgColor: 'bg-gray-100' },
        { id: 'pastries', title: 'Pastries', items: pastries },
      ].map(({ id, title, items, bgColor = '' }) => (
        <div key={id} id={id} className={`py-20 px-10 ${bgColor}`}>
          <h2 className="text-4xl font-bold text-pink-600">{title}</h2>
          <p className="mt-4 text-lg text-gray-800">"Delicious treats await you!"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            {items.map((item, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <Image
                  src={item.src}
                  alt={item.description}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-md"
                  style={{ borderRadius: '10px' }}
                />
                <div className="mt-2">
                  <span className="font-bold block text-pink-400">{item.name}</span>
                  <span className="font-bold block">{item.description}</span>
                  <span className="text-purple-500 font-bold">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

