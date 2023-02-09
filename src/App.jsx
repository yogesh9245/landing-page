import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Cards from './Components/Cards'
import GetStarted from './Components/GetStarted'
import Video from './Components/Video'
import Split from './Components/Split'
import Skills from './Components/Skills'
import Pricing from './Components/Pricing'
import Support from './Components/Support'
import Footer from './Components/Footer'
import Services from './Components/Services'
import CallToAction from './Components/CallToAction'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Body/>
    <Cards/>
    <GetStarted/>
    <Video/>
    <Split/>
    <Services/>
    <Skills/>
    <CallToAction/>
    <Pricing/>
    <Support/>
    <Footer/>
    </>
  )
}

export default App
