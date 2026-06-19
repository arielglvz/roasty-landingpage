import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import Subscription from "@/components/Subscription"
import VisitUs from "@/components/VisitUs"
import Signup from "@/components/Signup"
import Footer from "@/components/Footer"

import "./App.css"

function App() {
  return (
    <main className="bg-[#FDF7FF]">
      <Header />
      <Hero />
      <Process />
      <Subscription />
      <VisitUs />
      <Signup />
      <Footer />
    </main>
  )
}

export default App
