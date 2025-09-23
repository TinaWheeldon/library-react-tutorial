import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Rating = ({ rating }) => {
    return (
        <div className="book__ratings">
            <div className="book__ratings">
                {
                    new Array(Math.floor(books.rating)).fill(0).map((_, index))
                }
                {
                    !Number.isInteger(books.rating) && (<FontAwesomeIcon icon="star-half-alt" />)
                }
            </div>
        </div>
    )
}

export default Rating;