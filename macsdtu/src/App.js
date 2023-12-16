import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Achievement from './components/Achievement';
import Event from './components/Event';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Sponsor from './components/Sponsor';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/achievement" element={<Achievement />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/sponsor" element={<Sponsor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
