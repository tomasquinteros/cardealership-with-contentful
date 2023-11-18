import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home-page"
import ProductsPage from "./pages/products-page"
import ContactPage from "./pages/contact-page"
import NotFoundPage from "./pages/error-404"

export default function RouterApp () {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}