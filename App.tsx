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
import BlogPost from './pages/BlogPost';
import Resources from './pages/Resources';
import Interests from './pages/Interests';

// ScrollToTop Helper
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) { target.scrollIntoView({ block: 'start' }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-slate-900 focus:p-3" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); }}>Skip to content</a>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
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