

export default function About() {
    return (
        <section className="bg-cream-brown text-gray-800 py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-purple-700 mb-6 sm:text-5xl">About Us</h1> {/* Adjusted font size for mobile */}
                <p className="text-lg font-light mb-8 sm:text-xl">
                    Welcome to <span className="font-semibold text-purple-500">Bakery Delight</span>, where every bite is a delight!
                </p>
                
                <h2 className="text-3xl font-semibold text-purple-600 mb-4 sm:text-4xl">Our Story</h2> {/* Adjusted font size for mobile */}
                <p className="text-base mb-8 leading-relaxed sm:text-lg sm:mx-auto sm:max-w-3xl">
                    It all began with a love for baking and a desire to share that love with others. From humble beginnings in our family kitchen, we grew into the beloved bakery we are today. With years of experience and a team of talented bakers, we have perfected our recipes to bring you the finest pastries, cakes, breads, and sweets.
                </p>

                <h2 className="text-3xl font-semibold text-purple-600 mb-4 sm:text-4xl">What We Offer</h2>
                <ul className="list-disc list-inside mb-8 text-left max-w-3xl mx-auto sm:text-lg">
                    <li className="mb-2">Signature Cakes – Perfect for birthdays, weddings, and special occasions.</li>
                    <li className="mb-2">Delicious Pastries – From croissants to éclairs, we have it all.</li>
                    <li className="mb-2">Artisan Breads – Baked fresh every day, with options like sourdough, multigrain, and more.</li>
                    <li className="mb-2">Custom Orders – Have a special event? Let us create a custom cake or pastry just for you.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-purple-600 mb-4 sm:text-4xl">Why Choose Us?</h2>
                <p className="text-base mb-8 leading-relaxed sm:text-lg sm:mx-auto sm:max-w-3xl">
                    Freshness guaranteed, locally sourced ingredients, handcrafted with care, and custom creations – we offer more than just baked goods, we offer a personal touch.
                </p>

                <h2 className="text-3xl font-semibold text-purple-600 mb-6 sm:text-4xl">Visit Us Today!</h2>
                <p className="text-lg font-light mb-6 leading-relaxed sm:text-xl">
                    Stop by our bakery in <span className="font-semibold text-purple-500">123 Bakery Lane, Sweetville</span> or place an order online for pick-up or delivery.
                </p>

                <div className="space-y-4 sm:space-y-6">
                    <a
                        href="/"
                        className="px-4 py-2 text-purple-500 hover:text-purple-700 font-semibold sm:px-6 sm:py-3 sm:text-xl">
                        Check out our Menu!
                    </a>

                    <a
    href="/orders"
    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 sm:px-6 sm:py-3 sm:text-xl lg:w-60 lg:ml-80 block text-center mt-4">
    Place Your Order
</a>

                </div>
            </div>
        </section>
    );
}

