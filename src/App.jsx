import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import RighteousCaliphate from './pages/RighteousCaliphate.jsx';
import Omayyads from './pages/Omayyads.jsx';
import Abbasids from './pages/Abbasids.jsx';
import NorthCaucasus from './pages/NorthCaucasus.jsx';
import CentralAsia from './pages/CentralAsia.jsx';
import Andalusia from './pages/Andalusia.jsx';
import Crimea from './pages/Crimea.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/righteous" element={<RighteousCaliphate />} />
        <Route path="/omayyads" element={<Omayyads />} />
        <Route path="/abbasids" element={<Abbasids />} />
        <Route path="/caucasus" element={<NorthCaucasus />} />
        <Route path="/central-asia" element={<CentralAsia />} />
        <Route path="/andalusia" element={<Andalusia />} />
        <Route path="/crimea" element={<Crimea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
