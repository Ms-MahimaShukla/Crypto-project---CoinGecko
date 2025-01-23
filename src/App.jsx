
import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import CoinTable from "./components/CoinTable/CoinTable";
import Navbar from './components/Navbar/Navbar';

function App(){
    
  const [currency, setCurrency]= useState('USD');
  return (
    <>
    <Navbar setCurrency={setCurrency}/>
    <Banner/>
    <CoinTable currency={currency}/>
    </>
  )
}

export default App;
