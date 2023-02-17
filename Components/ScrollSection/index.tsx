import React, {useEffect, useRef, useState} from 'react'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber';
import {AbstractDonut} from '../3DModel/AbstractDonut/Scene';

function ScrollSection() {
  const sectionRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);
  const canvasRef = useRef<any>();

  const [fixedCanvas, setFixedCanvas] = useState(false);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    const canvasHeight = canvasRef.current.offsetHeight;

    if(scrollHeight >= canvasHeight){
      setFixedCanvas(true)
    }

    else{
      setFixedCanvas(false);
    }
  }

  useEffect(() => {
    const timelaneOne = gsap.timeline({
        scrollTrigger:{
            trigger: sectionRef.current,
            start: 'top-=800 top',
            end: 'bottom top',
            scrub: true,
        }
    }).fromTo(textOneRef.current, {y: '20%'}, {y:'-80%'}, "key1").fromTo(textTwoRef.current, {y: '-110%'}, {y: '110%'}, "key1");


    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timelaneOne.kill();
    }

}, [])


  return (
    <section ref = {sectionRef}>
      <div className='text-container'>
        <h2 className='next-level' ref = {textOneRef}>NEXT LEVEL</h2>
        <h2 className='design' ref = {textTwoRef}>OF <span className='color1'>DESIGN</span></h2>
      </div>
      <div className='canvas-container' id = 'DonutContainer' ref = {canvasRef}>
        <Canvas>
          {/* <HeroModel/> */}
          <AbstractDonut/>
        </Canvas>
      </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            position: relative;
            overflow: hidden;
        }
        section::after{
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          transform: scale(1.1);
          -webkit-backdrop-filter: blur(1em);
          backdrop-filter: blur(2em);
          background-color: rgba(13, 11, 16, 0.4);
        }
        .text-container{
          max-width: 1950px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          font-family: 'Montserrat';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .text-container h2{
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 200px;
          margin: 0;
          padding: 0;
          white-space: nowrap;
        }
        .color1{
          background-image: linear-gradient(
                180deg,
                #38BCDC,
                #1966AF
            );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .canvas-container{
          width: 100%;
          height: 100%;
          ${fixedCanvas && `
            position: fixed;
            top: 0;
            left: 0;
          `}
        }
    `}</style>
    </section>
  )
}

export default ScrollSection