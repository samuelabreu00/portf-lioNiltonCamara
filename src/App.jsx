import { Header } from "./Components/Header/header"
import { Home } from "./Components/Home/home"
import { About } from "./Components/About/about"
import { Service } from "./Components/Service/service"
import {Partners} from "./Components/Partners/parceiros"
import { Contact } from "./Components/Contact/contact"
import BackToTop from "./Components/BackToTop/BackToTop"

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
