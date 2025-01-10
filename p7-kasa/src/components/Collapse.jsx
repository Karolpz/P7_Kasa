import React, { useState } from 'react'
import arrow from '../assets/images/arrowCollapse.png'
import PropTypes from 'prop-types';

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
                    {text}
                </div>
            )}
        </div>

    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Collapse