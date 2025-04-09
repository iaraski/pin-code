import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Company from "./Pages/Company.tsx";
import Blog from "./Pages/Blog.tsx";
import Products from "./Pages/Products.tsx";
import Services from "./Pages/Services.tsx";
import Portfolio from "./Pages/Portfolio.tsx";
import Footer from "./Components/Footer.tsx";
import "./styles/main.css"
import Header from "./Components/Header.tsx";
import"./styles/fonts.css"
import Triager from "./Pages/Triager.tsx";
import Janna from "./Pages/Janna.tsx";
import Kastel from "./Pages/Kastel.tsx";


export default function App() {

    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/company" element={<Company/>} />
                <Route path="/triager" element={<Triager/>}/>
                <Route path ="/janna" element={<Janna/>}/>
                <Route path="/kastel" element={<Kastel/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}