import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar';
import SpaceSection from '@/Components/SpaceSection/SpaceSection';
import Hero from '../Components/Hero';
import DesignerPhrase from '../Components/DesignerPhrase';
import VerticalText from '../Components/VerticalTextSection';
import LateralScroll from '../Components/LateralScroll/LateralScroll';
import InfoSection from '@/Components/InfoSection/InfoSection';
import OurClients from '@/Components/OurClients/OurClients';
import ContactUs from '@/Components/ContactUs/ContactUs';
import Footer from '@/Components/Footer/Footer';
import {BsSoundwave} from 'react-icons/bs';

export default function Home() {
  const [focus, setFocus] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  const audioRef:any = useRef(null);

  const handleAudio = () => {
    setPlaySound(playSound ? false : true);
  }

  return (
    <div>
      <Navbar/>
      <DesignerPhrase/>
      <Hero/>
      <SpaceSection/>
      <VerticalText/>
      <SpaceSection/>
      <LateralScroll/>
      <SpaceSection/>
      <InfoSection/>
      <OurClients/>
      <ContactUs/>
      <Footer/>
      {/* <button onClick = {handleAudio}>
        <BsSoundwave style = {{width: '50px', height: '50px'}}/>
      </button>             */}
      <style jsx>{`
        .home-appear{
          background-color: black;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        body{
          overflow: hidden;
        }
        button{
          position: fixed;
          right: 25px;
          bottom: 25px;
          border: none;
          background: transparent;
          color: ${playSound ? '#1966AF' : 'grey'};
          cursor: pointer;
          z-index: 1000;
          transition: color .2s ease-in;
        }
        button:hover{
          color: #38BCDC;
        }
      `}</style>
    </div>
  )
}
