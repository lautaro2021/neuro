import React, { useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'

function VerticalText() {
  const sectionRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);

  useLayoutEffect(() => {
    const timelaneOne = gsap.timeline({
        scrollTrigger:{
            trigger: sectionRef.current,
            start: 'top-=400 top',
        }
    })
    .fromTo('#animate', {opacity: 0, x: '100%'}, {opacity: 1, x: '0%', duration: 0.75, stagger: 0.15})

}, [])


  return (
    <section ref = {sectionRef}>
      <div>
        <h2>
          <span id = 'animate'>NEXT</span>
        </h2>
        <h2>
          <span id = 'animate' className='color1'>LEVEL</span>  
        </h2>
      </div>
      <div>
        <h2>
          <span id = 'animate'>OF</span>
        </h2>
        <h2>
          <span id = 'animate' className='color2'>DESIGN</span>
        </h2>
      </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        div{
          height: 100%;
          width: 50%;
          font-size: 100px;
          color: white;
        }
        div:first-child{
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          padding: 0 1em;
        }
        .color1{
          color: #1966AF;
        }
        div:last-child{
          display: flex;
          flex-direction: column;
          align-items: end;
          justify-content: center;
          text-align: end;
          padding: 0 1em;
        }
        .color2{
          color: #38BCDC;
        }
        div h2{
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        div h2 span{
          display: block;
          font-family: 'Monument';
          font-weight: 600;
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
    `}</style>
    </section>
  )
}

export default VerticalText