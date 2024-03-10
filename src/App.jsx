import { Header } from "./Screens/HeaderScreen/header"
import { Home } from "./Screens/HomeScreen/home"
import { About } from "./Screens/AboutScreen/about"
import { Service } from "./Screens/ServiceScreen/service"
import {Partners} from "./Screens/PartnersScreen/parceiros"
import { Contact } from "./Screens/ContactScreen/contact"
import BackToTop from "./Components/BackToTop/BackToTop"
import './index.css'

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Service/>
    <Partners/>
    <Contact/>
    <BackToTop/>
    </>
  )
}

export default App
