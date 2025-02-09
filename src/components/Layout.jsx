import Header from './Header';
import About from '../pages/About';
import Services from '../pages/Services'

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <About />
        <Services />
      </main>
    </>
  );
};

export default Layout;
