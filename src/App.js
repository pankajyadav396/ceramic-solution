import './App.css';
import Backtotop from './components/common/BackToTop';
import Preloader from './components/common/Preloader';
import Customer from './components/Customer';
import Footer from './components/Footer';
import Accordion from './components/Frequently';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Intresed from './components/Intresed';
import OurBlog from './components/OurBlog';
import OurProcess from './components/OurProcess';
import ServiceAreas from './components/ServiceAreas';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <>
      <Preloader />
      <Backtotop />
      <Header />
      <WhatWeDo />
      <OurProcess />
      <Customer />
      <HowItWorks />
      <Intresed />
      <OurBlog />
      <Accordion />
      <ServiceAreas />
      <Footer />
    </>
  );
}

export default App;
