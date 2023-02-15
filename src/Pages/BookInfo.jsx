import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <Link to="/books"> 
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;