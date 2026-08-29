import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LenisProvider } from './lib/lenis';
import { RouteScroll } from './components/RouteScroll';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  return (
    <LenisProvider>
      <BrowserRouter>
        <RouteScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
    </LenisProvider>
  );
}
