import StickyBar from './components/StickyBar'
import Hero from './components/Hero'
import BeforeAfter from './components/BeforeAfter'
import Benefits from './components/Benefits'
import Procedure from './components/Procedure'
import Footer from './components/Footer'
import Price from './components/Pricing'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <>
     <StickyBar />
     <main>
      <Hero />
      <BeforeAfter />
      <Benefits />
      <Procedure />
      <Price />
      <LeadForm />
     </main>
      <Footer />
    </>
  )
}

export default App
