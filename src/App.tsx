import React from 'react';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Product from './component/product/product';
import Categories from './component/categories/categories';
import AboutUs from './component/about/about-us';
import WhyUs from './component/about/why-us';
import ContactUs from './component/about/contact-us';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Product />
        <Categories />
        {/* <FeatureProduct /> */}
        <AboutUs />
        <WhyUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
