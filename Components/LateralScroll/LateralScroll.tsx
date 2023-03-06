import React, {useEffect, useRef, useState} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ReactVivus from 'vivus'

function HorizontalScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const container:any = useRef(null);
    const mask:any = useRef(null);

    useEffect(() => {
        const section = document.querySelector('#lateralScroll');
        const itemsArray = gsap.utils.toArray('.horizontal_item');
        const containerWidth = container.current.offsetWidth;

        const context = gsap.context(() => {
            gsap.to(itemsArray, {
                xPercent: -100 * (itemsArray.length - 1),
                ease: 'sine.out',
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1,
                    start: 'top+=20 top',
                    end: '+=' + containerWidth,
                }
            })
            gsap.to('.svg', {
                y: '-100',
                opacity: 1,
                ease: 'elastic',
                duration: 1,
                scrollTrigger: {
                    trigger: '#lateralScroll',
                    start: 'top top'
                }
            })
            gsap.to(mask.current, {
                width: '100%',
                scrollTrigger: {
                    trigger: '#lateralScroll',
                    start: 'top left',
                    end: '+=' + containerWidth,
                    scrub: 1,
                }
            })
            gsap.timeline({
                scrollTrigger: {
                    trigger: '#lateralScroll',
                    start: 'top-=400 top',
                }
            })
            .fromTo('#title', {opacity: 0, y: '100%'}, {y: '0', opacity: 1, duration: 1.5, stagger: 0.1, ease: 'SlowMo.easeOut'}, 'key1')
            .fromTo('#first-service', {opacity: 0, width: 0}, {width: '60%', opacity: 1, duration: 1.5, ease: 'SlowMo.easeOut'}, 'key1')
            .fromTo('#png', {opacity: 0}, {opacity: 1, duration: 1.5, ease: 'SlowMo.easeOut'}, 'key1')
            .fromTo('.bg-img', {opacity: 0}, {opacity: .3, duration: 1.5, ease: 'SlowMo.easeOut'}, 'key1')
            .fromTo('#li', {opacity: -1}, {opacity: 1, duration: 1, delay: .5, stagger: 0.2, ease: 'SlowMo.easeOut'}, 'key1')
        })

        return () => context.revert();

    }, [])

  return (
    <section id = 'lateralScroll'>
        <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'>
              <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
              <mask id="mask0_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
                <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_0_1)">
              <rect className="mask" y="-49" height="99" fill="#1966AF" ref = {mask}/>
              </g>
        </svg>
        <div className='title-container'>
            <h2>
                <span id = 'title'>OUR SERVICES</span>
            </h2>
        </div>
        <div className="container" ref = {container}>
            <div className="horizontal_item">
                <div className="service"  id = 'first-service'>
                    <div className='service-title'>
                        <h3>Identity</h3>
                    </div>
                    <div className='service-info'>
                        <img
                        src={'/images/LOGO.png'}
                        alt='LOGOPNG'
                        id='png'
                        />
                        <ul>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Logotype
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Key Visual
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Brand Identity
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Re-Branding
                            </li>
                        </ul>
                    </div>
                    <img
                        src={'/images/Identity.png'}
                        alt='IdentityBG'
                        className='bg-img'
                        >
                    </img>
                </div>
            </div>
            <div className="horizontal_item">
                <div className="service">
                    <div className='service-title'>
                        <h3>Website</h3>
                    </div>
                    <div className='service-info'>
                        <ul>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Web Design
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Responsive Design
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                3D Web
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                E - Commerce
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                UX/UI
                            </li>
                        </ul>
                    </div>
                    <img
                        src={'/images/website.png'}
                        alt='Websiteinfo'
                        className='bg-img'
                        >
                    </img>
                    <img
                        src={'/images/LOGO.png'}
                        alt='LOGOPNG'
                        id='png'
                        />
                </div>
            </div>
            <div className="horizontal_item">
                <div className="service">
                    <div className='service-title'>
                        <h3>Content</h3>
                    </div>
                    <div className='service-info'>
                    <ul>
                        <li id = 'li'>
                            <span>
                                <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                            </span>
                            Video Production
                        </li>
                        <li id = 'li'>
                            <span>
                                <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                            </span>
                            Fotography
                        </li>
                        <li id = 'li'>
                            <span>
                                <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                            </span>
                            Campaigns
                        </li>
                    </ul>
                    <img
                        src={'/images/LOGO.png'}
                        alt='LOGOPNG'
                        id='png'
                        />
                    </div>
                    <img
                        src={'/images/Content.png'}
                        alt='ContentBG'
                        className='bg-img'
                        >
                    </img>  
                </div>
            </div>
            <div className="horizontal_item">
                <div className="service">
                    <div className='service-title'>
                        <h3>Design</h3>
                    </div>
                    <div className='service-info'>
                        <ul>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Social Media
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Packaging
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Flyers
                            </li>
                            <li id = 'li'>
                                <span>
                                    <img src = {'/images/listIcon.png'} alt = 'listIcon'/>
                                </span>
                                Posters
                            </li>
                        </ul>
                        <img
                        src={'/images/LOGO.png'}
                        alt='LOGOPNG'
                        id='png'
                        />
                    </div>
                    <img
                        src={'/images/Design.png'}
                        alt='DesignBG'
                        className='bg-img'
                        >
                    </img>                     
                </div>
            </div>
        </div>
    <style jsx>{`
        section{
            width: 100%;
            height: 100vh;
            color: white;
            position: relative;
            background-color: #000;
            background-image: linear-gradient(0, #000000 50%, #0D0D0D 50%);
            background-size: 4px 4px;
            font-family: 'Monument';
        }
        svg{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
        }
        .mask{
            width: 0;
        }
        .title-container{
            display: flex;
            align-items: center;
            justify-content: center;
            overflog: hidden;
        }
        h2{
            font-size: 60px;
            font-family: 'Monument';
            font-weight: 800;
            overflow: hidden;
        }
        h2 span{
            display: inline-block;
        }
        .container{
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            box-sizing: border-box;
        }
        .horizontal_item{
            min-width: 100%;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: start;
            justify-content: center;
        }
        .service{
            background: black;
            width: 1500px;
            height: 800px;
            margin-top: 3%;
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            box-shadow: 0 0 50px 2px rgb(8 106 216 / 25%);
            position: relative;
        }
        .bg-img{
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
            opacity: .3;
            z-index: 0;
        }
        .service-title{
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: start;
            padding: 50px 0 0 0;
        }
        .service-title h3{
            font-size: 60px;
            font-weight: 600;
            animation: parpadeo 3s ease-in-out infinite;
            margin: 0;
            padding: 0;
            z-index: 1000;
            text-transform: uppercase;
        }
        .service-info{
            height: 100%;
            width: 60%;
            margin: 0;
            display: flex;
            align-items: start;
            justify-content: center;
            padding: 30px 0px 0px 0px;
        }
        .service-info ul{
            font-size: 40px;
            margin: 20px 0;
            padding: 0;
            list-style: none;
            z-index: 1000;
        }
        .service-info ul li{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .service-info ul li:not(:first-child){
            margin: 50px 0px;
        }
        .service-info ul li img{
            width: 40px;
            height: 40px;
            animation: listMovement 3s ease-in-out infinite;
        }
        #png{
            width: 70px;
            height: 70px;
            position: absolute;
            top: 20px;
            right: 20px;
            animation: movement 3s ease-in-out infinite;
        }
        @keyframes movement{
            0%{
                filter: drop-shadow(0px 0px 10px rgba(56, 188, 220, 0.5));
                transform: translateY(0);
            }
            50%{
                filter: drop-shadow(0px 0px 4px rgba(25, 102, 175, 0.2));
                transform: translateY(10px);
            }
            100%{
                filter: drop-shadow(0px 0px 10px rgba(56, 188, 220, 0.5));
                transform: translateY(0);
            }
        }
        @keyframes listMovement{
            0%{
                transform: translateY(5px);
            }
            50%{
                transform: translateY(10px);
            }
            100%{
                transform: translateY(5px);
            }
        }
        @keyframes parpadeo{
            0%{
                filter: drop-shadow(0px 0px 10px rgba(56, 188, 220, 1));
            }
            50%{
                filter: drop-shadow(0px 0px 4px rgba(25, 102, 175, 0.5));
            }
            100%{
                filter: drop-shadow(0px 0px 10px rgba(56, 188, 220, 1));
            }
        }
    `}</style>
    </section>
  )
}

export default HorizontalScroll