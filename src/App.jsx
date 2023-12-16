import { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Basic from './components/basic/basic';
import Header_two from './components/header-two/Header_two';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import Footer from './components/footer/Footer';

function App() {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <Banner />
      <Header_two isOpen={() => setOpenModal(true)} />
      <Modal isOpen={OpenModal} onclose={() => setOpenModal(false)}></Modal>
      <Footer/>
    </div>
  );
}

export default App;
