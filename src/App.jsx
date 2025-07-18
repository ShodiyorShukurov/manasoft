import Layout from './components/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Call from './components/Call';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/portfolio/details/:id" element={<ProjectDetail />} />
      </Routes>
      <Call />
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
