import React, {useState} from 'react';
import { Switch, Route, Routes, Router } from "react-router-dom";
import logo from './IMG_1014.png';
import './App.css';

import Header from '../src/component/header';
import ModalScreen from './screens/modalScreen';
import MainScreen from './screens/mainScreen';
import AboutScreen from './screens/aboutScreen';
import FeaturesScreen  from './screens/featuresScreen';

function MainView() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <ModalScreen isOpen={isOpen} setIsOpen={setIsOpen} /> : <MainScreen />}
    </>
  );
}

function AboutView() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <ModalScreen isOpen={isOpen} setIsOpen={setIsOpen} /> : <AboutScreen />}
    </>
  );
}

function FeaturesView() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <ModalScreen isOpen={isOpen} setIsOpen={setIsOpen} /> : <FeaturesScreen />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainView/>} />
          <Route path="/info" element={<AboutView />} />
          <Route path="/features" element={<FeaturesView />} />
      </Routes>
    </div>
  );
}

export default App;
