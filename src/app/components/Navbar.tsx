'use client';
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-pink-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Delight Baker's</h1>

                {/* Hamburger icon on mobile */}
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <ul
                    className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}
                >
                    <li>
                        <Link href="/" className="text-white hover:text-pink-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-pink-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-pink-300">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/orders" className="text-white hover:text-pink-300">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link href="/reviews" className="text-white hover:text-pink-300">
                            Reviews
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
