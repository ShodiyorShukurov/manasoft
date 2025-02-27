import Hero from '../pages/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import ContactForm from '../pages/ContactForm';
import Question from '../pages/Question';
import WorkPage from '../pages/WorkPage';
import Projects from '../pages/Projects';
import Customers from '../pages/Customers';


const Layout = () => {


  return (
    <main>
      <Hero />
      <About />
      <Customers />
      {/* <Services />
      <WorkPage />
      <Projects />
      <Question />
      <ContactForm /> */}
    </main>
  );
};

export default Layout;
