import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import ScrollToHashElement from './ScrollToHash';
import TopNav from './layout/TopNav';
import Footer from './layout/Footer';
function App() {
 
  return (
    <div className="w-full ">
      <BrowserRouter>
      <TopNav/>
        {/* <NavBar/> */}
        <ScrollToTop />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Nopage />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
