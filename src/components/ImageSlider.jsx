import { useState } from "react"
import "../styles/ImageSlider.css"
import left from "../Images/left.png"
import right from "../Images/right.png"

const leftArrow = <img src = {left} alt = "left-arrow" className = "arrow" />
const rightArrow = <img src = {right} alt = "right-arrow" className = "arrow" />

const ImageSlider = ({slides}) => {
    const [currentPicture, setCurrentPicture] = useState(0)

    const goPrevious = () => {
        const firstSlide = currentPicture === 0;
        const newPicture = firstSlide ? slides.length - 1 : currentPicture - 1;
        setCurrentPicture(newPicture);
    }

    const goNext = () => {
        const lastSlide = currentPicture === slides.length - 1;
        const newPicture = lastSlide ? 0 : currentPicture + 1;
        setCurrentPicture(newPicture);
    }

    if (!Array.isArray(slides) || slides.lenght <= 0) {
         return null;
    }

    return (
        <div className = "sliderStyle">
            <div className = "leftStyle" onClick={goPrevious}>{leftArrow}</div>
            <div className = "rightStyle" onClick={goNext}>{rightArrow}</div>
            <div className = "slideCount">{currentPicture + 1}/{slides.length}</div>
            <div className = "containerStyle">
                {slides.map((slidePicture, index) => {
                    return (
                        <div key = {index} className = {index === currentPicture ? 'slideStyles active' : 'slideStyles' }>
                        {index === currentPicture && (
                        <img src={slidePicture} alt='' className='picture' />
                         )}
                    </div>
                    )
                }
                )}
            </div>
        </div>
    )
 }


export default ImageSlider
