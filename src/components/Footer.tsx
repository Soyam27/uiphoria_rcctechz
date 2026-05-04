
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Brand */}
          <div className="text-2xl font-bold text-black">UIPHORIA</div>
          
          {/* Tagline */}
          <p className="mt-3 text-sm text-gray-600">Premium merchandise for modern creators</p>

          {/* Links */}
          <div className="mt-8 flex justify-center gap-8">
            <a href="#privacy" className="text-sm text-gray-600 hover:text-black transition">Privacy</a>
            <a href="#terms" className="text-sm text-gray-600 hover:text-black transition">Terms</a>
            <a href="#support" className="text-sm text-gray-600 hover:text-black transition">Support</a>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-xs text-gray-400">© 2024 UIPHORIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
