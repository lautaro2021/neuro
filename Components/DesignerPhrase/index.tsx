import React, {useEffect, useState} from 'react'
import gsap from 'gsap'

function DesignerPhrase() {
    const [showElement, setShowElement] = useState(true);

    useEffect(() => {
        const timelapseGSAP = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
        timelapseGSAP?.to('#create', {y: '0%', duration: 1.7, stagger: 0.5});

        setTimeout(() => {
            setShowElement(false);
        }, 5000)

    }, [])

  return (
    <section>
        <div>
            <h2><span id = 'create'>"A brand</span></h2>
            <h2><span id = 'create'>&nbsp;is a promise</span></h2>
            <h2><span id = 'create'>&nbsp;of an <span id = 'create' className='experience-span'>EXPERIENCE.</span>"</span></h2>
            <h2 style = {{width: '100%', textAlign: 'end'}}><span id = 'create'>-Alexander Isley</span></h2>
        </div>
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
            font-family: 'Montserrat';
            font-size: 35px;
            margin: 0;
            padding: 0;
        }
        div h2{
            margin: 5px;
            padding: 0;
            background-color: black;
            overflow: hidden;
            font-weight: bolder;
        }
        div h2 span{
            display: inline-block;
            transform: translateY(100%);
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