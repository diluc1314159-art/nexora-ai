import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Developers from './pages/Developers';
import Whitepaper from './pages/Whitepaper';
import About from './pages/About';
import DataHub from './pages/DataHub';

// Simple ScrollToTop component manually implemented since ScrollRestoration might behave differently in HashRouter
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<About />} /> {/* Reusing About page for simplicity as per structure */}
          <Route path="/datahub" element={<DataHub />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;