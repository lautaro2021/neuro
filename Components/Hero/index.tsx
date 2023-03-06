import React, {useLayoutEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import CubeCascade from '../3DModel/Cube/Scene';
import gsap from 'gsap';

function Hero() {

  useLayoutEffect(() => {
    const t1 = gsap.timeline({defaults: {ease: 'SlowMo.easeOut'}});
    t1.fromTo('#anim', {y: '100%', opacity: 0}, {y: '0%', duration: .8, stagger: 0.1, delay: 5.15, opacity: 1});
  }, [])

  return (
    <section>
        <div className='text'>
          <h2 className = 'color1' >
            <span id = 'anim'>Creating your</span>
          </h2>
          <h2 className = 'low-index' >
            <span id = 'anim'>own online</span>
          </h2>
          <h2 className = 'color2' >
            <span id = 'anim'>experience</span>
          </h2>
          <h2 className = 'low-index' >
            <span id = 'anim'>that boost</span>
          </h2>
          <h2 className = 'low-index' >
            <span id = 'anim'>your</span>
          </h2>
          <h2 className = 'color1' >
            <span id = 'anim'>digital adn</span>
          </h2>
        </div>
        <div className='canvas-container' id = 'canvas'>
        <Canvas dpr={[1, 2]} shadows camera={{fov: 75}}>
          <CubeCascade/>
        </Canvas>
        </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        section{
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
        .text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          color: white;
          font-family: 'Monument';
          line-height: 170px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          padding: 0.7em 0 0 1em;
          font-size: 100px;
        }
        .text h2{
          white-space: wrap;
          font-weight: 600;
          margin: 0;
          padding: 0;
          overflow: hidden;
          text-transform: uppercase;
        }
        .text h2 span{
          display: inline-block;
        }
        .color2{
          color: #38BCDC;
        }
        .canvas-container{
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
    `}</style>
    </section>
  )
}

export default Hero