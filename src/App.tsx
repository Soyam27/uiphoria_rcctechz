import React, { useEffect, useMemo, useState } from 'react'
import './App.css'

type Product = {
  id: number
  title: string
  price: number
  image?: string
  category?: string
}

const productsSeed: Product[] = [
  { id: 1, title: 'Loud Sneakers', price: 129.99, image: '/src/assets/hero.png', category: 'sneakers' },
  { id: 2, title: 'Bass Headphones', price: 249.99, image: '/src/assets/react.svg', category: 'audio' },
  { id: 3, title: 'RGB Keyboard', price: 89.99, image: '/src/assets/vite.svg', category: 'accessories' },
  { id: 4, title: "Minimalist Watch", price: 199.99, image: '/assets/missing-image.png', category: 'watches' },
  { id: 5, title: 'Too Bright Perfume', price: 59.99, image: '/src/assets/hero.png', category: 'perfume' },
  { id: 6, title: 'Gaming Mouse', price: 79.99, image: '/src/assets/react.svg', category: 'gaming' }
]

const HorribleNavbar: React.FC = () => {
  return (
    <header className="horrible-navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-left">
        <div className="brand">UIPHORIA MARKETPLACE</div>
        <div className="super-menu">Shop • Drops • Deals • Blog • Careers • About • Support • More</div>
      </div>

      <div className="nav-right">
        <input aria-label="search" className="bad-search" placeholder="SEARCH? maybe" />
        <button className="nav-btn red-on-blue">CART</button>
        <button className="nav-btn inconsistent">Sign in</button>
      </div>
    </header>
  )
}

const FlashSale: React.FC = () => {
  const [count, setCount] = useState(600)
  useEffect(() => {
    const t = setInterval(() => setCount(c => Math.max(0, c - Math.floor(Math.random() * 7))), 800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flash-sale" role="region" aria-live="polite">
      <div className="flash-inner">
        <strong>FLASH SALE</strong>
        <div className="countdown">Time left: {count}s</div>
        <button className="flash-cta blink">BUY MAYBE</button>
      </div>
    </div>
  )
}

const FiltersSidebar: React.FC<{onFilter:(cat:string|null)=>void}> = ({onFilter}) => {
  return (
    <aside className="filters">
      <h3>FILTERS</h3>
      <div className="filter-group">
        <label className="tiny">Category</label>
        <select onChange={(e)=>onFilter(e.target.value || null)} className="tiny-select">
          <option value="">All</option>
          <option value="sneakers">SNEAKERS</option>
          <option value="audio">Audio</option>
          <option value="gaming">Gaming</option>
          <option value="watches">Watches</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="tiny">Price</label>
        <input className="tiny" placeholder="max price" />
      </div>
    </aside>
  )
}

const ProductCard: React.FC<{p:Product; onAdd:(p:Product)=>void}> = ({p,onAdd}) => {
  return (
    <div className={`product-card card-random-${p.id % 3}`}>
      <div className="img-wrap">
        {p.image ? <img src={p.image} alt={p.title} className="product-img" /> : <div className="broken-img">MISSING</div>}
      </div>
      <div className="prod-body">
        <h4 className="prod-title">{p.title}</h4>
        <div className="prod-price">${p.price.toFixed(2)}</div>
        <div className="prod-actions">
          <button className="btn-primary" onClick={()=>onAdd(p)}>CLICK HERE NOW FAST</button>
          <button className="btn-secondary">BUY MAYBE</button>
        </div>
      </div>
    </div>
  )
}

const ProductList: React.FC<{products:Product[]; onAdd:(p:Product)=>void}> = ({products,onAdd}) => {
  return (
    <section className="product-list">
      {products.map(p=> <ProductCard key={p.id} p={p} onAdd={onAdd} />)}
    </section>
  )
}

const Testimonials: React.FC = () => (
  <section className="testimonials">
    <h3>Testimonials</h3>
    <div className="test-grid">
      <div className="test-item heavy-shadow">"I couldn't find the checkout button"</div>
      <div className="test-item neon">"SO LOUD"</div>
      <div className="test-item tiny-text">"tiny type, large consequences"</div>
    </div>
  </section>
)

const CartPreview: React.FC<{items:Product[]}> = ({items}) => {
  const total = items.reduce((s,i)=>s+i.price,0)
  return (
    <aside className="cart-preview" aria-label="cart preview">
      <h4>Cart ({items.length})</h4>
      <div className="cart-items">
        {items.map(it=> <div key={it.id} className="cart-item">{it.title} <span className="price-inline">${it.price.toFixed(2)}</span></div>)}
      </div>
      <div className="cart-total">Total: <span className="price-inline">${total.toFixed(2)}</span></div>
      <button className="checkout tiny-hidden">Hidden Checkout (click)</button>
    </aside>
  )
}

const FAQ: React.FC = ()=>{
  const [open,setOpen] = useState<number|null>(null)
  return (
    <section className="faq">
      <h3>FAQ (click cards awkwardly)</h3>
      {[1,2,3].map(i=> (
        <div key={i} className={`faq-card ${open===i? 'open':'closed'}`} onClick={()=>setOpen(open===i?null:i)}>
          <div className="q">Q{i}: How does this work?</div>
          <div className="a">A{i}: Not well. Layout shifts may occur. {open===i ? 'Extra long answer causing horizontal scroll on mobile and more shift.' : ''}</div>
        </div>
      ))}
    </section>
  )
}

const AnnoyingPopup: React.FC = () => {
  const [show,setShow] = useState(true)
  useEffect(()=>{
    const t = setInterval(()=>setShow(s=>!s),5000)
    return ()=>clearInterval(t)
  },[])
  if(!show) return null
  return (
    <div className="coupon-popup" role="dialog" aria-label="coupon">
      <div>Get 5% off! <button className="tiny" onClick={()=>alert('Nope')}>CLAIM</button></div>
    </div>
  )
}

const Footer: React.FC = ()=> (
  <footer className="bad-footer">
    <div className="cols">
      <div>Links<br/>Home<br/>Shop<br/>About<br/>Contact<br/>Blog<br/>Careers</div>
      <div>Help<br/>Returns<br/>Shipping<br/>Terms<br/>Privacy</div>
      <div>Social<br/>FB • TW • IG • LN • TIKTOK</div>
    </div>
  </footer>
)

export default function App(){
  const [filter,setFilter] = useState<string|null>(null)
  const [cart,setCart] = useState<Product[]>([])
  const products = useMemo(()=> productsSeed.filter(p=> !filter || p.category===filter),[filter])

  return (
    <div className="bad-ecom-site">
      <HorribleNavbar />
      <FlashSale />
      <div className="main-row">
        <FiltersSidebar onFilter={(c)=>setFilter(c)} />
        <div className="content-area">
          <section className="hero-section">
            <h1 className="hero-title">TRENDY SALE LOUD</h1>
            {/* <p className="hero-sub">Everything is important. Nothing is prioritized.</p> */}
          </section>

          <ProductList products={products} onAdd={(p)=>setCart(prev=>[...prev,p])} />

          <FlashSale />
          <Testimonials />
          <FAQ />
        </div>

        <CartPreview items={cart} />
      </div>

      <AnnoyingPopup />
      <Footer />
    </div>
  )
}
