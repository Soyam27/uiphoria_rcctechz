const Footer = () => {
  return (
    <footer className="border-t border-gray-200" style={{marginTop: '-20px', background: 'linear-gradient(90deg,#ffffff 0%,#ffffff 50%, #0f172a 50%, #0f172a 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Left side: light */}
          <div style={{flex: 1, textAlign: 'left', color: '#0b1220'}}>
            <div className="text-2xl font-bold">UIPHORIA</div>
            <p className="mt-3 text-sm typo-mono">Premium merchandise for modern creators</p>
          </div>

          {/* Right side: dark */}
          <div style={{flex: 1, textAlign: 'right', color: '#f3f4f6'}}>
            <div className="mt-2 md:mt-0">
              <a href="#privacy" className="text-sm hover:underline" style={{color: '#e6eef8'}}>Privacy</a>
              <span className="mx-4" style={{color: 'rgba(230,238,248,0.6)'}}>|</span>
              <a href="#terms" className="text-sm hover:underline" style={{color: '#e6eef8'}}>Terms</a>
              <span className="mx-4" style={{color: 'rgba(230,238,248,0.6)'}}>|</span>
              <a href="#support" className="text-sm hover:underline" style={{color: '#e6eef8'}}>Support</a>
            </div>

            <p className="mt-4 text-xs" style={{color: 'rgba(230,238,248,0.7)'}}>© 2024 UIPHORIA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
