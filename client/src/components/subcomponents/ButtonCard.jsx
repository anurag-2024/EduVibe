import React from 'react'
import '../styles/substyles/button.scss'
const ButtonCard = ({value}) => {
    return (
        <>
            <button className='btnn'>
                {value}
            </button>
        </>
    )
}

export default ButtonCard
