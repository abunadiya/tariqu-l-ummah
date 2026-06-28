import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Sahabah from './pages/Sahabah.jsx';
import RighteousCaliphate from './pages/RighteousCaliphate.jsx';
import Omayyads from './pages/Omayyads.jsx';
import Abbasids from './pages/Abbasids.jsx';
import NorthCaucasus from './pages/NorthCaucasus.jsx';
import CentralAsia from './pages/CentralAsia.jsx';
import Andalusia from './pages/Andalusia.jsx';
import Crimea from './pages/Crimea.jsx';
import Library from './pages/Library.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/sahabah" element={<Sahabah />} />
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
