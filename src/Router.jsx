import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home-page"
import ProductsPage from "./pages/products-page"
import ContactPage from "./pages/contact-page"
import NotFoundPage from "./pages/error-404"
import Header from "./components/header"
import Footer from "./components/footer"
import GeneralDescriptionCar from "./pages/general-description-page"

export default function RouterApp () {
  return(
    <BrowserRouter>
      <body className="flex flex-col justify-between max-w-screen min-h-screen">
        <Header/>
        <main className="min-h-full">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cars" element={<ProductsPage/>}/>
            <Route path="/contact&us" element={<ContactPage/>}/>
            <Route path="/cars/:id" element={<GeneralDescriptionCar/>} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </main>
        <Footer/>
      </body>
    </BrowserRouter>
  )
}