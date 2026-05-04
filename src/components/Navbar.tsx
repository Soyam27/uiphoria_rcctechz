

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-tight text-black">UIPHORIA</span>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-black transition">Home</a>
            <a href="#shop" className="text-sm font-medium text-gray-700 hover:text-black transition">Shop</a>
            <a href="#collections" className="text-sm font-medium text-gray-700 hover:text-black transition">Collections</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-black transition">Contact</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="search" className="p-2 text-gray-700 hover:text-black transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button aria-label="cart" className="p-2 text-gray-700 hover:text-black transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
