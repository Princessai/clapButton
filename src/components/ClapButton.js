import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import './ClapButton.css';


const ClapButton = () => {

    const [clap, setClap] = useState(0)


    return (
        <div className='clapDiv'>
            <span> +{clap}</span>

                <FontAwesomeIcon icon={faHandsClapping} className='handsClapIcon' onClick={() => setClap(clap + 1)} max={20}/>
    
        </div>
    )
}

export default ClapButton
