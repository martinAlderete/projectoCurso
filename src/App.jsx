import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import { PlansPage } from "./pages/PlansPage"


export const App = () => {
  return (<>
  <BrowserRouter>
  <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
        
      </div>

  
  
  </BrowserRouter>
  
  </>
  )
}
