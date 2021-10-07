import './Hero.scss'
import { useEffect, useRef  } from 'react'
import { init } from 'ityped'


export default function Hero() {

    const textRef = useRef();
    
    useEffect(() => { 
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Frontend', 'Backend', 'Full Stack'  ] 
        });
    },[])
    return (
        <div className='hero' id='hero'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Cameron</h1>
                    <h3>
                        <span ref={textRef}></span>
                        Web Developer!
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
