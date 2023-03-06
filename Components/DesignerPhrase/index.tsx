import React, {useEffect, useState, useLayoutEffect} from 'react'
import gsap from 'gsap'
import Link from 'next/link';

function DesignerPhrase() {
    const [showElement, setShowElement] = useState(true);

    useLayoutEffect(() => {
        const timelapseGSAP = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
        timelapseGSAP?.fromTo('#create', {opacity: 0, y: '100%'}, {y: '0%', duration: 1, stagger: 0.25, opacity: 1}, 'key1');
        timelapseGSAP?.to('#container-div', { duration: 0.25, opacity: 1}, 'key1');

        setTimeout(() => {
            setShowElement(false);
        }, 5000)

    }, [])

  return (
    <section>
        <div id = 'container-div'>
            <h2>
                <span id = 'create'>"A&nbsp;</span>
                <span id = 'create'>brand</span>
            </h2>
            <h2>
                <span id = 'create'>&nbsp;is&nbsp;</span>
                <span id = 'create'>a&nbsp;</span>
                <span id = 'create'>promise</span>
            </h2>
            <h2>
                <span id = 'create'>&nbsp;of&nbsp;</span>
                <span id = 'create'>an 
                    <span id = 'create' className='experience-span'>&nbsp;EXPERIENCE</span>"
                </span>
            </h2>
            <h2 style = {{width: '100%', textAlign: 'end'}}><span id = 'create'>-Alexander Isley</span></h2>
        </div>
        {/* <Link href = '/home'>
            <button>GO HOME</button>
        </Link> */}
    <style jsx>{`
        section{
            background-color: black;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: phrase 5s ease-in;
            overflow: hidden;
            z-index: -1;
            display: ${showElement ? '' : 'none'}
        }
        @keyframes phrase{
            0%{
                z-index: 1000;
                display: block;
            }
            85%{
                z-index: 1000;
                display: block;
                height: 100vh;
            }
            100%{
                height: 0;
                display: block;
            }
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            color: white;
            width: 50%;
            height: 100%;
            font-size: 35px;
            margin: 0;
            padding: 0;
            opacity: 0;
        }
        div h2{
            margin: 5px;
            padding: 0;
            background-color: black;
            overflow: hidden;
            font-family: 'Monument';
            font-weight: 200;
        }
        div h2 span{
            display: inline-block;
        }
        .experience-span{
            font-size: 70px;
            letter-spacing: -0.15rem;
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

export default DesignerPhrase