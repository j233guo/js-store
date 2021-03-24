import {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const BackToTop = () =>{

    const [show, setShow] = useState(false)

    const checkTop = () => {
        if (!show && window.pageYOffset > 400){
            setShow(true)
        } else if (show && window.pageYOffset <= 400){
            setShow(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkTop)

    return (
        <div
            className="scrollTop"
            onClick={scrollToTop} 
            style={{height: 40, display: show ? 'flex' : 'none', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>
                <button><FaArrowCircleUp/> Back To Top</button>
        </div>
    );
}

export default BackToTop;