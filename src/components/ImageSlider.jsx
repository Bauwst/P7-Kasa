import { useState } from "react"
import "../styles/ImageSlider.css"
import left from "../Images/left.png"
import right from "../Images/right.png"

const ImageSlider = ({slide}) => {
    const [currentPicture, setCurrentPicture] = useState(0)

    const slideStyle = {
        backgroundImage: `url(${slide[currentPicture]})`
    }

    const goPrevious = () => {
        const firstSlide = currentPicture === 0;
        const newPicture = firstSlide ? slide.length - 1 : currentPicture - 1;
        setCurrentPicture(newPicture);
    }

    const goNext = () => {
        const lastSlide = currentPicture === slide.length - 1;
        const newPicture = lastSlide ? 0 : currentPicture + 1;
        setCurrentPicture(newPicture);

    }

    const goSlide = (slidePicture) => {
        setCurrentPicture(slidePicture)
    }

    const leftArrow = <img src = {left} alt = "left-arrow" className = "arrow" />
    const rightArrow = <img src = {right} alt = "right-arrow" className = "arrow" />

    return (
        slide.length > 1 ?
        <div className = "slideStyle">
            <div className = "leftStyle" onClick={goPrevious}>{leftArrow}</div>
            <div className = "rightStyle" onClick={goNext}>{rightArrow}</div>
            <div style={slideStyle} className ="slideStyle"></div>
            <div className = "slidePicture">{currentPicture + 1}/{slide.length}</div>
            <div className = "containerStyle">
                {slide.map((slidePicture) =>
                <div key = {slidePicture} className ="Styles" onClick ={() => goSlide(slidePicture)}>-</div>
                )}
            </div>
        </div>
        :
        <div className = "sliderStyle">
            <div style ={slideStyle} className ="slideStyle"></div>
        </div>
    )
}





export default ImageSlider