import React, {useState, useEffect, useRef} from 'react'
import RandomCharacter from '../randomCharacters';
import gsap from 'gsap';

function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [animationController, setAnimationController] = useState(false);
    const [imageAnimation, setImageAnimation] = useState(false);
    const handleScroll = () => {
        const position = window.scrollY * 2;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() => {
        if(scrollPosition > 1200){
            setAnimationController(true);
        }
        if(scrollPosition > 1300){
            setImageAnimation(true)
        }
        else {
            setImageAnimation(false);
            setAnimationController(false);
        }
    }, [scrollPosition])

  return (
    <section>
        <div className='center-div'>
            <div className = 'logo-container'>
                <img
                    src={'/ISO.PNG'}
                    alt='iso neuro'
                    className = ''
                />
                <img
                    src={'/NEURO.png'}
                    alt='neuro Letter'
                />
            </div>
            <div className = 'options-container'>
                <RandomCharacter wordPassed = 'About' anim = {animationController}/>
                <RandomCharacter wordPassed = 'Our Proyects'  anim = {animationController}/>
                <button>
                    <RandomCharacter wordPassed = 'Contact'  anim = {animationController}/>
                </button>
            </div>
        </div>
    <style jsx>{`
        section{
            width: ${animationController ? '0' : '70vw'};
            height: 100px;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 60px;
            z-index: 1000;
            -webkit-backdrop-filter: blur(1em);
            backdrop-filter: blur(1em);
            background-color: rgba(13, 11, 16, 0.4);
            border: ${animationController ? 'none' : '1px solid rgba(255, 255, 255, 0.5)'};
            animation: ${animationController ? 'desapear 1s ease-in' : 'ap 1s ease-in'};
        }
        @keyframes desapear{
            from{
                width: 70vw;
                border: 1px solid rgba(255, 255, 255, 0.5);
            }
            to{
                width: 0;
                border: none;
            }
        }
        @keyframes ap{
            from{
                width:0;
            }
            to{
                width: 70vw;
            }
        }
        .center-div{
            max-width: 1750px;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        img:last-child{
            width: 170px;
            transition: width .4s;
            display: none;
            margin-left: -50px;
            animation: ${imageAnimation ? 'imageDisapear 1.7s ease-in' : 'imageAppear 1.5s ease-in'};
        }
        img:first-child{
            width: 100px;
            height: 100px;
            transition: width .4s;
            cursor: ${imageAnimation ? '' : 'pointer'};
            opacity: ${imageAnimation ? '0' : '1'};
            animation: ${imageAnimation ? 'imageDisapear 1.7s ease-in' : 'imageAppear 1.5s ease-in'};
        }
        @keyframes imageDisapear{
            0%{
                transform: scale(1);
                opacity: 1;
            }
            60%{
                transform: scale(0.6);
                opacity: 1;
            }
            100%{
                transform: scale(0);
                opacity: 0;
            }

        }
        img:first-child:hover{
            width: 110px;
        }
        img:first-child:hover + img:last-child{
            display: ${imageAnimation ? 'none' : 'block'};
            width: 200px;
            animation: aparecer .8s;
            z-index: -1;
        }
        img:last-child:hover{
            display: block;
        }
        @keyframes aparecer{
            from{
                opacity: -1;
                margin-left: -150px
            }
            to{
                opacity: 1;
                margin-left: -50px;
            }
        }
        .logo-container{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .options-container{
            max-width: 680px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
        }
        button{
            border: none;
            padding: 12px 20px;
            width: ${animationController ? '0' : '140px'};
            border-radius: 30px;
            -webkit-backdrop-filter: blur(2em);
            backdrop-filter: blur(2em);
            background-color: rgba(94, 94, 94, 0.4);
            cursor: pointer;
            overflow: hidden;
            opacity: ${animationController ? '0' : '1'};
            animation: ${animationController ? 'buttonDesapear 1s ease-in' : ''};
        }
        @keyframes buttonDesapear{
            from{
                width: 140px;
                padding: 12px 20px;
                opacity: 1;
            }
            to{
                width: 0;
                padding: 0;
                opacity: 0;
            }
        }
    `}</style>
    </section>
  )
}

export default Navbar