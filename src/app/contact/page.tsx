import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto mt-10"> {/* Increased padding and max width */}
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        
        <div className="flex items-center mb-3">
          <img src="/phone.png" alt="Phone Icon" className="mr-2" style={{ width: '14px', height: '14px' }} />
          <p className="text-sm">Phone: <span className="text-gray-800">(123) 456-7890</span></p>
        </div>
        
        <div className="flex items-center mb-3">
          <img src="/mail.png" alt="Email Icon" className="mr-2" style={{ width: '14px', height: '14px' }} />
          <p className="text-sm">Email: <span className="text-gray-800">contact@delight baker's.com</span></p>
        </div>
        
        <div className="flex items-center mb-3">
          <img src="/location.png" alt="Map Icon" className="mr-2" style={{ width: '14px', height: '14px' }} />
          <p className="text-sm">Address: <span className="text-gray-800">123 Bakery Lane, Sweetville</span></p>
        </div>
        
        <div className="text-center mt-4">
          <a href="mailto:contact@yourbakery.com" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
            Send us an Email
          </a>
        </div>
      </div>
    </div>
  );
}
