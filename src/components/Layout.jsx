import Header from './Header';
import About from '../pages/About';
import Services from '../pages/Services';
import Footer from './Footer';
import Portfolio from '../pages/Portfolio';

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <About />
        {/* <Services /> */}
        <Portfolio/>
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
