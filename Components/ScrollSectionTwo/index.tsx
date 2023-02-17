import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'

function index() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const timelaneOne = gsap.timeline({
            scrollTrigger:{
                trigger: sectionRef.current,
                start: 'top-=500 top',
                end: 'bottom top',
                scrub: true,
            }
        }).fromTo(textRef.current, {x: '-60%'}, {x:'50%'})

    }, [])

  return (
    <section ref = {sectionRef}>
        <h2 ref = {textRef}>OUR <span>SERVICES</span></h2>
        <div id="services"></div>
        <div id="services"></div>
        <div id="services"></div>
        <div id="services"></div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: start;
            background-color: #000000;
        }
        h2{
            color: white;
            font-size: 200px;
        }
        h2 span{
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

export default index