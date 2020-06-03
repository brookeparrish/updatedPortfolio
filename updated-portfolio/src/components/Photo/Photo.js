import React from 'react';
import Image from 'react-bootstrap/Image';

function Photo() {
    return (
        <div className="text-center pb-4 pt-4">
            <Image src="newSquare.png" alt="Brooke Parrish" className="photo rounded-circle" />
        </div>
    );
} 

export default Photo;