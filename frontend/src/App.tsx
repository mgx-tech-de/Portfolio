import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LenisProvider } from './lib/lenis';
import { LanguageProvider } from './i18n/LanguageContext';
import { RouteScroll } from './components/RouteScroll';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}
