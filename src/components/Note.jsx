import redStar from '../Images/RedStar.png'
import whiteStar from '../Images/WhiteStar.png'
import '../styles/Note.css'

const check = <img src={redStar} alt='checked-star' />
const uncheck = <img src={whiteStar} alt = 'unchecked-star' />
const noteValue = {
    1: <div className='rating'>{check}{uncheck}{uncheck}{uncheck}{uncheck}</div>,
    2: <div className='rating'>{check}{check}{uncheck}{uncheck}{uncheck}</div>,
    3: <div className='rating'>{check}{check}{check}{uncheck}{uncheck}</div>,
    4: <div className='rating'>{check}{check}{check}{check}{uncheck}</div>,
    5: <div className='rating'>{check}{check}{check}{check}{check}</div>
}


const Note = ({ evaluation }) => {
    return (
        noteValue[evaluation]
    )
}

export default Note