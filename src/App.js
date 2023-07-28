import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import Sample from './pages/About/Sample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} title='타이틀' />
          <Route path="/project" element={<Project title='프로젝트' />} />
          <Route path="/about" element={<About />} >
            <Route path='sample' element={<Sample />} />
          </Route>
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
