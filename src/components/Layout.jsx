import Header from './Header';
import About from '../pages/About';
import Services from '../pages/Services';
import Footer from './Footer';
import Portfolio from '../pages/Portfolio';
import ContactForm from '../pages/ContactForm';
import Question from '../pages/Question';
import WorkPage from '../pages/WorkPage';
import Projects from '../pages/Projects';
import Customers from '../pages/Customers';


const Layout = () => {


  return (
    <main>
      <About />
      <Services />
      <Portfolio />
      <WorkPage />
      <Projects />
      <Customers />
      <Question />
      <ContactForm />
    </main>
  );
};

export default Layout;
