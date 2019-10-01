import React from 'react';
import About from './containers/About/About'
import Header from './containers/Header/Header';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
