import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import ScrollToHashElement from "./ScrollToHash";

import LandingLayout from "./layouts/LandingLayout";
import AppLayout from "./layouts/AppLayout";
import Home from './pages/landing/Home';
import About from './pages/landing/About';
import Invest from './pages/landing/Invest';
import Impact from './pages/landing/Impact';
import Project from './pages/landing/Project';
import Waitlist from './pages/landing/Waitlist';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        {/* Landing Site Routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Route>

        {/* Web App Routes */}
        <Route path="/app" element={<AppLayout />}>
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
