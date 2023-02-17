import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import DesignerPhrase from '../Components/DesignerPhrase';
import ScrollSection from '../Components/ScrollSection';
import ScrollSectionTwo from '../Components/ScrollSectionTwo';

export default function Home() {
  const [focus, setFocus] = useState(true);

  useEffect(() => {
    let previousTitle = document.title;

    window.addEventListener('blur', () => {
      previousTitle = document.title;
      document.title = 'Come back'
      setFocus(false);
    })

    window.addEventListener('focus', () => {
      document.title = previousTitle;
      setFocus(true);
    })

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    
  }, [focus])


  return (
    <div>
      <Head>
        <title>Neuro Studio</title>
        <meta name="description" content="Neuro Digital Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <DesignerPhrase/>
      <Hero/>
      <ScrollSection/>
      <ScrollSectionTwo/>
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
      `}</style>
    </div>
  )
}
