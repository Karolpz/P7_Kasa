import React, { useState } from 'react'
import arrow from '../assets/images/arrowCollapse.png'

const Collapse = ({ title, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapseContent">
            <div className="collapseBar">
                <h2> {title} </h2>
                <img 
                src={arrow} 
                alt="flèche déroulement collapse" 
                onClick={toggleCollapse} 
                className={isOpen ? 'arrow arrowOpen' : 'arrow arrowClose'} />
            </div>
            {isOpen && (
                <div className="collapseText">
                    <p>{text}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse