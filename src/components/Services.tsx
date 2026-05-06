import React, { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactSvg from '../assets/react.svg'
import viteSvg from '../assets/vite.svg'

const products = [
  {
    id: 1,
    title: 'Minimalist Black Tee',
    description: 'Premium 100% cotton tee with minimalist design',
    price: 29.99,
    originalPrice: 49.99,
    image: heroImg
  },
  {
    id: 2,
    title: 'Creator Hoodie',
    description: 'Comfortable hoodie for creators and artists',
    price: 64.99,
    originalPrice: 89.99,
    image: reactSvg
  },
  {
    id: 3,
    title: 'Limited Cap',
    description: 'Snapback cap with embroidered logo',
    price: 34.99,
    originalPrice: 49.99,
    image: viteSvg
  },
  {
    id: 4,
    title: 'Signature Tote Bag',
    description: 'Eco-friendly canvas tote with print',
    price: 39.99,
    originalPrice: 59.99,
    image: heroImg
  },
  {
    id: 5,
    title: 'Premium Socks Pack',
    description: 'Set of 3 premium cotton blend socks',
    price: 24.99,
    originalPrice: 39.99,
    image: reactSvg
  },
  {
    id: 6,
    title: 'Branded Joggers',
    description: 'Comfort fit joggers in multiple colors',
    price: 59.99,
    originalPrice: 84.99,
    image: viteSvg
  }
]

const Services = () => {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.title} added to cart!`)
  }

  return (
    <section id="shop" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">Shop Our Collection</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked merchandise designed for creators. Limited drops, premium quality.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group" style={{marginLeft: '-6px', transform: 'skewY(-1deg)'}}>
              {/* Product Image Area */}
              <div className="bg-white aspect-[4/3] flex items-center justify-center overflow-hidden" style={{paddingTop: 0}}>
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" style={{opacity: 1}} />
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-black typo-display">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-600 typo-mono">{product.description}</p>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-bold text-black typo-mono">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through typo-serif">${product.originalPrice}</span>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 px-4 py-2 border-2 border-black text-black font-semibold hover:bg-gray-100 transition rounded-lg text-sm"
                  >
                    Add to Cart
                  </button>
                  <button className="flex-1 px-4 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition rounded-lg text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
