import React from 'react';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
