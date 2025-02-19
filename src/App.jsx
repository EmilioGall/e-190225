import { useState } from 'react'
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Biography from './components/Biography';
import Expertise from './components/Expertise';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {

  return (
    <>

      <Header />

      <main>

        <Jumbo />

        <Biography />

        <Expertise />

        <Clients />

      </main>

      <Footer />

    </>
  )
}

export default App
