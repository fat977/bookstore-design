import { useState, useEffect } from "react";
import './header.scss';
import logo from '../../assets/img/header/modern-book-design-1b.jpg';

export const Header = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["We are pleased to serve our coustomer.","Our offers fit everyone's budget."];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className="container header" style={{overflowX : "hidden"}}>
            <img src={logo} className="img-header float-end" alt="header" />
            <div className="box p-5">
                <p>My tip. Keep your mind and your notebook open to real life.</p>
                <h2><span data-rotate='["We are pleased to serve our coustomer.","Our offers fit everyone budget." ]' ><span className="wrap">{text}</span></span></h2>                
                <button className="shop mt-5">Shop Now</button>
            </div>
        </div>

    )
}
