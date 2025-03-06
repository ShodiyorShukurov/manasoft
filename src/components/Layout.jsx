import Hero from '../pages/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import ContactForm from '../pages/ContactForm';
import Question from '../pages/Question';
import WorkPage from '../pages/WorkPage';
import Projects from '../pages/Projects';
import Customers from '../pages/Customers';
import Partners from '../pages/Partners';

const Layout = () => {
  return (
    <main>
      <Hero />
      <About />
      <Customers />
      <Projects />
      <Services />
      <WorkPage />
      <Partners />
      <Question />
      <ContactForm />
    </main>
  );
};

export default Layout;
