import { useEffect, useState } from "react";

export default function RandomCharacter({wordPassed, anim}:any){
    const [word, setWord] = useState(wordPassed);
    const [hover, setHover] = useState<any>(false);
    const [intervalCounter, setIntervalCounter] = useState(0);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/;=-~!@#$%^&*()+{}:?><€¡¥×«»¶¿çµñ©æáßðøöóíúüþéåä';

    const handleLeave = () => {
        setHover(false);
        setIntervalCounter(0);
    }

    useEffect(() => {
        const randomlyArrayOfChars = chars.split('').sort((a, b)=> 0.5 - Math.random());
        const sliced = randomlyArrayOfChars.slice(0, word.length).join('');

        const interval = setInterval(() => {
            if(hover && intervalCounter < 5){
                setWord(sliced);
                setIntervalCounter((prevCounterValue:number) => prevCounterValue + 1);
            }
            else{
                setWord(wordPassed);
                clearInterval(interval);
            }
        }, 100);
    
        return () => {
            clearInterval(interval);
        }
      }, [hover, word]);


    return (
        <>
        <span onMouseOver = {() => setHover(true)} onMouseLeave = {() => handleLeave()}>
            {word}
        </span>
        <style jsx>{`
            span{
            font-family: 'Monument';
            font-weight: 200;
            font-size: ${anim ? '0px' : '22px'};
            cursor: ${anim ? '' : 'pointer'};
            color: grey;
            transition: color .3s;
            white-space: nowrap;
            animation: ${anim ? 'spanDesapear 1s ease-in' : 'spanAppear 1s ease-in'};
            pointer-events: ${anim ? 'none' : ''};
            }
            span:hover{
                color: white;
            }
            @keyframes spanDesapear{
                from{
                    font-size: 22px;
                }
                to{
                    font-size: 0;
                }
            }
            @keyframes spanAppear{
                from{
                    font-size: 0;
                }
                to{
                    font-size: 22px;
                }
            }
        `}</style>
        </>
    )
}