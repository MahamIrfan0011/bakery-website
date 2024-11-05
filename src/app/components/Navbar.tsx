import Link from 'next/link';
function Navbar(){
    return(
        <nav className="bg-pink-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Delight Baker's</h1>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-pink-300">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:text-pink-300">About</Link>
                </li>
                
                <li>
                    <Link href="/contact" className="text-white hover:text-pink-300">Contact</Link>
                </li>
                <li>
                    <Link href="/orders" className="text-white hover:text-pink-300">Orders</Link>
                </li>
                <li>
                    <Link href="/reviews" className="text-white hover:text-pink-300">Reviews</Link>
                </li>

            </ul>
            </div>

        </nav>
    )
}
export default Navbar;