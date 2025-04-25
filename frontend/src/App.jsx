import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
  

function App() {
  

  return (
    <BrowserRouter>
     <Navbar/>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
