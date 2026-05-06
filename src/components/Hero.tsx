const Hero = () => {
    return (
        <section id="home" className="min-h-[100vh] bg-white ">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 text-center">
                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black leading-tight tracking-tight typo-serif typo-scale-h1" style={{transform: 'rotate(-2deg)', textAlign: 'center', marginLeft: '0'}}>
                    Define Your <span className="text-gray-400">Style.</span>
                </h1>

                {/* Subheading */}
                <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium typo-mono" style={{color: 'rgba(31,41,55,0.9)', fontStyle: 'normal', transform: 'none'}}>
                    Discover premium merchandise curated for creators and trendsetters. Bold designs. Superior quality. Limited drops.
                </p>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a href="#shop" className="inline-block w-full sm:w-auto px-10 py-4 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-800 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        Shop Now
                    </a>
                    <a style={{transform: 'rotate(5deg)', transformOrigin: 'left center'}} href="#collections" className="inline-block w-full sm:w-auto px-10 py-4 bg-white border-2 border-black text-black font-bold text-lg rounded-full hover:bg-gray-50 transition transform hover:-translate-y-1">
                        View Collections
                    </a>
                </div>

                {/* Optional subtle stats below */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 sm:gap-16 text-gray-500" style={{transform: 'rotate(-3deg)', transformOrigin: 'right center'}}>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-black">10k+</span>
                        <span className="text-sm font-medium uppercase tracking-wider mt-1">Customers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-black">4.9</span>
                        <span className="text-sm font-medium uppercase tracking-wider mt-1">Star Rating</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-black">100%</span>
                        <span className="text-sm font-medium uppercase tracking-wider mt-1">Premium</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
