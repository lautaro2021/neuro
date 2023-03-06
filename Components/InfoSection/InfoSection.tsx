import React, {useEffect, useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lenis from '@studio-freight/lenis';
import {useIntersection} from '../intersectionObserver'

function InfoSection() {
    gsap.registerPlugin(ScrollTrigger);
    const vertical:any = useRef(null);
    const colLeft = useRef(null);
    const title:any = useRef(null);
    
    useLayoutEffect(() => {
        const sectionHeight = vertical.current.clientHeight;
        const titleHeight = title.current.clientHeight;
        const lateralContainer:any = document.querySelector('.container');

        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });

        function raf(time:any) {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const ctx = gsap.context(() => {
            const timeIn = gsap.timeline({paused: true});

            timeIn.fromTo(colLeft.current, {y: 0}, {y: (vertical.current.clientHeight), duration: 1, ease: 'none'});
    
            const scroll = ScrollTrigger.create({
                animation: timeIn,
                trigger: vertical.current,
                start: `center+=${(lateralContainer.offsetWidth)} 50%`,
                end: `bottom+=${lateralContainer.offsetWidth} center`,
                scrub: true,
            })

            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: vertical.current,
                    start: `center+=${(lateralContainer.offsetWidth)} top`,
                    markers: true,
                }
            })

        })

        return () => ctx.revert();

    }, [])

  return (
    <section id = 'infoSection' ref = {vertical}>
        <div className='container'>
            <div className='col left' ref = {colLeft}>
                <h2 className='heading' ref = {title}>
                    <span style = {{color: '#1966AF'}}>HOW</span>
                    <span>WE</span>
                    <span style = {{color: '#1966AF'}}>WORK</span>
                </h2>
            </div>
            <div className='col right'>
                <div className='items'>
                    <h3>01. Meeting the customer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className='items colorDiv'>
                    <h3>02. Planification</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className='items'>
                    <h3>03. Development</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className='items colorDiv'>
                    <h3>04. Launch</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: auto;
            color: white;
            font-family: 'Monument';
        }
        h2{
            font-size: 120px;
            font-weight: 900;
            line-height: 85%;
            border-left: 3px solid #1966AF;
            padding: 25px;
            margin: 0;
            z-index: 1000;
        }
        h2 span{
            display: block;
        }
        
        h3{
            font-size: 55px;
            font-weight: 600;
            animation: parp 5s ease-in-out infinite;
        }
        h2, h3, h4{
            text-transform: uppercase;
        }
        p{
            width: 85%;
            font-size: 15px;
        }
        .container{
            width: 100%;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: start;
        }
        .col{
            width: 50%;
        }
        .left{
            width: 45%;
            padding: 1em 5em;
            z-index: 1000;
        }
        .right{
            width: 55%;
            padding: 0 5em;
        }
        .items:not(:last-child) {
            margin-bottom: 50px;
        }
    `}</style>
    </section>
  )
}

export default InfoSection