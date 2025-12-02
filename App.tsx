import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Research from './pages/Research';
import Blogs from './pages/Blogs';
import Resources from './pages/Resources';
import Interests from './pages/Interests';

// ScrollToTop Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Header />
          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/interests" element={<Interests />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;