import '../styles/Collapse.css'
import Vector from '../Images/Vector.png'
import {React,useState} from 'react'

const Collapse = ({title, description}) => {
    const[isOpen, setIsOpen] = useState(false)
    const vectorUp = <img src={Vector} alt = 'Fleche' className='fleche'/>
    const vectorDown = <img src={Vector} alt='Fleche' className='fleche  fleche-down'/>

    return !isOpen ? (
        <div className='collapse'>
            <button className='collapse-button' onClick={() => setIsOpen(true)}>
                {title}{vectorDown}
            </button>
        </div>
    ) : (
        <div className='collapse'>
            <button className='collapse-button' onClick={() => setIsOpen(false)}>
                {title}{vectorUp}
            </button>
            <p className='collapse-description'>{description}</p>
        </div>
    )
}

export default Collapse
    
    