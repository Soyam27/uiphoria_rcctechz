import './App.css'
import SiteLayout from './layout/SiteLayout'
import Hero from './components/Hero'
import Services from './components/Services'

const App = () => {
  return (
    <SiteLayout>
      <main>
        <Hero />
        <Services />
      </main>
    </SiteLayout>
  )
}

export default App
