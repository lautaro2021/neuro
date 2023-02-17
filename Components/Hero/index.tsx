import React, {useEffect, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import HeroModel from '../3DModel/HeroModel'
import CubeCascade from '../3DModel/Cube/Scene';

function Hero() {
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => { 
    let element = sectionRef.current;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      })
    })

    return () => ctx.revert();
  }, [])

  return (
    <section ref={sectionRef}>
        <div className='text'>
          <h2 className = 'color1'>Creating your</h2>
          <h2 className = 'low-index'>own online</h2>
          <h2 className = 'color1'>experience</h2>
          <h2 className = 'low-index'>that boost your</h2>
          <h2 className = 'color1'>digital adn</h2>
        </div>
        <Canvas dpr={[1, 2]} shadows>
          {/* <Model/> */}
          {/* <CubeCascade/> */}
          <HeroModel/>
        </Canvas>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        section{
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: rgb(0, 0, 0);
            {/* background: linear-gradient(90deg, rgba(22,22,22,1) 0%, rgba(0,0,0,1) 50%, rgba(22,22,22,1) 100%);
            z-index: -1; */}
        }
        .text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 100%;
          color: white;
          font-family: 'Roboto', sans-serif;
          line-height: 220px;
          z-index: 100;
        }
        .text h2{
          font-size: 190px;
          white-space: wrap;
          font-weight: bold;
          margin: 0;
          padding: 0;
        }
        .color1{
          background-image: linear-gradient(
                180deg,
                #1966AF,
                #38BCDC
            );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
    `}</style>
    </section>
  )
}

export default Hero