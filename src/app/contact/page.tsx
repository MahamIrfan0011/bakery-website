

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md max-w-lg mx-auto -mt-32"> {/* Responsive padding */}
        <h2 className="text-2xl font-bold text-center mb-6 sm:mb-4">Contact Us</h2>
        
        <div className="flex items-center mb-4 sm:mb-3"> {/* Increased margin-bottom */}
          <img src="/phone.png" alt="Phone Icon" className="mr-3" style={{ width: '16px', height: '16px' }} /> {/* Increased icon size */}
          <p className="text-sm sm:text-base">Phone: <span className="text-gray-800">(123) 456-7890</span></p>
        </div>
        
        <div className="flex items-center mb-4 sm:mb-3"> {/* Increased margin-bottom */}
          <img src="/mail.png" alt="Email Icon" className="mr-3" style={{ width: '16px', height: '16px' }} /> {/* Increased icon size */}
          <p className="text-sm sm:text-base">Email: <span className="text-gray-800">contact@delightbakers.com</span></p>
        </div>
        
        <div className="flex items-center mb-4 sm:mb-3"> {/* Increased margin-bottom */}
          <img src="/location.png" alt="Map Icon" className="mr-3" style={{ width: '16px', height: '16px' }} /> {/* Increased icon size */}
          <p className="text-sm sm:text-base">Address: <span className="text-gray-800">123 Bakery Lane, Sweetville</span></p>
        </div>
        
        <div className="text-center mt-6">
          <a
            href="mailto:contact@yourbakery.com"
            className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition duration-300"
          >
            Send us an Email
          </a>
        </div>
      </div>
    </div>
  );
}
